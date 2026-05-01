import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../../', import.meta.url));

let cache = null;

function buildCommitDateMap() {
  const map = new Map();
  let stdout;
  try {
    stdout = execSync(
      'git log --diff-filter=A --name-only --format=COMMIT:%aI -- src/content/posts',
      { cwd: projectRoot, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }
    );
  } catch {
    return map;
  }

  let currentDate = null;
  for (const rawLine of stdout.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line.startsWith('COMMIT:')) {
      currentDate = line.slice('COMMIT:'.length);
      continue;
    }
    if (!currentDate) continue;
    const match = line.match(/^src\/content\/posts\/((?:zh|en)\/[^/]+\.md)$/);
    if (!match) continue;
    const id = match[1];
    if (!map.has(id)) {
      map.set(id, currentDate);
    }
  }
  return map;
}

export function getCommitDateMap() {
  if (cache === null) {
    cache = buildCommitDateMap();
  }
  return cache;
}

export function getPubDate(post) {
  const map = getCommitDateMap();
  const iso = map.get(post.id);
  if (iso) return new Date(iso);
  return new Date(post.data.date);
}
