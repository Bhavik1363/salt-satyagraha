import I18n from 'i18n-js';
import en from './languages/english.json';
import gu from './languages/gujrati.json';  // Fix typo if needed
import hn from './languages/hindi.json';

I18n.translations = {
  en,
  gu,
  hn,
};

I18n.fallbacks = true;
I18n.locale = localStorage.getItem("lang") || "en"; // Persist language

export default I18n;
