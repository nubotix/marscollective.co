import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: require('./locales/en.json')
    },
    es: {
      translations: require('./locales/es.json')
    },
    pt: {
      translations: require('./locales/pt.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  react: {
    wait: true
  }
})

i18next.languages = ['en', 'es', 'pt']

export default i18next
