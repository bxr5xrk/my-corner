import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

const LANGUAGES = ['en', 'uk'];

const languageFromLS = localStorage.getItem('i18nextLng');

const DEFAULT_LANGUAGE = LANGUAGES.includes(languageFromLS)
  ? languageFromLS
  : LANGUAGES[0];

i18n
  .use(Backend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
