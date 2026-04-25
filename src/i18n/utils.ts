import { ui, defaultLang, showDefaultLang } from './ui';
import type { Lang } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang], params?: Record<string, string | number>) {
    let translation = ui[lang][key] || ui[defaultLang][key] || key;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        translation = translation.replace(`{${k}}`, String(v));
      });
    }
    return translation;
  };
}

export function getLocalizedPath(path: string, lang: Lang) {
  if (!showDefaultLang && lang === defaultLang) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${normalizedPath}`;
}

export function getOppositeLocale(lang: Lang): Lang {
  return lang === 'zh' ? 'en' : 'zh';
}
