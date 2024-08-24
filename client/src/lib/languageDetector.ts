import i18nConfig from '@/app/i18nConfig';
import nextLanguageDetector from 'next-language-detector';

export const languageDetector = nextLanguageDetector({
  supportedLngs: i18nConfig.locales,
  fallbackLng: i18nConfig.defaultLocale,
});
