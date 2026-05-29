import { ui, defaultLang } from './ui';
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
