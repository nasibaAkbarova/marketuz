import uz from '../shared/locales/uz.json';
import ru from '../shared/locales/ru.json';
import en from '../shared/locales/en.json';
import type { Language } from '../types';


const translations: Record<Language, any> = { uz, ru, en };

export const translate = (path: string, lang: Language): string => {
  const keys = path.split('.');
  let result = translations[lang];
  for (const key of keys) {
    if (result && result[key]) {
      result = result[key];
    } else {
      return path;
    }
  }
  return result as string;
};
