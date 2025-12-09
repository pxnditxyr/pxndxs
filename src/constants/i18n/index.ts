import { en } from './en'
import { es } from './es'

export const translations = {
  en,
  es,
}

export type Language = keyof typeof translations

// Default language
export const defaultLang: Language = 'en'

export const getTranslations = (lang: Language = defaultLang) => {
  return translations[lang] || translations[defaultLang]
}
