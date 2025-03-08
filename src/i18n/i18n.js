import I18n  from 'i18n-js';
import en from './languages/english.json'
import gu from './languages/gujrati.json'
import hn from './languages/hindi.json'

const defaultLanguage = 'en';

I18n.translations = {
  gu,
  en,
  hn,
};

I18n.fallbacks = true;

I18n.locale = defaultLanguage;


export const setLocale = (locale) => {
  I18n.locale = locale;
};

export default I18n;