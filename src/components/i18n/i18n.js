import i18n from "i18next";
import { InitReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import  LanguageDetector from "i18next-browser-languagedetector";


i18n.use(Backend).use(LanguageDetector).use(InitReactI18next).init({
    fallbacklng: 'ru',
    debug: true,
    interpolation: {
        eccapeValue: false,
    },
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'path'],
        cache: ['cookie']
    }
})