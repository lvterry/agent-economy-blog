import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://agent-economy.vercel.app',
  integrations: [mdx()],
  viewTransitions: true,
});
