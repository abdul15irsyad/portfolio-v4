import i18next from 'i18next';
import dayjs from 'dayjs';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEn from './langs/en.json';
import translationId from './langs/id.json';
import 'dayjs/locale/id';

export const I18N_KEY = 'i18nextLng';
export const defaultLanguage = 'en';
let lng: string;
try {
  lng = localStorage?.getItem(I18N_KEY) ?? defaultLanguage;
} catch (error) {
  lng = defaultLanguage;
}
dayjs.locale(lng);

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: { translations: translationId },
      en: { translations: translationEn },
    },
    lng,
    fallbackLng: defaultLanguage,
    defaultNS: 'translations',
    // debug: false,
    // interpolation: {
    //   escapeValue: false,
    // },
  });

export default i18next;
