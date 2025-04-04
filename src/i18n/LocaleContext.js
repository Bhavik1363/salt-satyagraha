import React, { createContext, useState, useEffect } from 'react';
import I18n, { setLocale } from './i18n';

var r = document.querySelector(':root');

export const LocaleContext = createContext({
  localeProvider: undefined,
  t: undefined,
  locale: undefined,
  changeLocale: undefined
});

export const LocaleContextProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(localStorage.getItem("lang") || I18n.locale);

  useEffect(() => {
    I18n.locale = locale;
    localStorage.setItem("lang", locale); // Persist language preference
  }, [locale]);

  const changeLocale = (newLocale) => {
    setLocaleState(newLocale);
    setLocale(newLocale)

    let newFontStyle = newLocale === "gu" ? ["'Noto Sans Gujarati'", "sans-serif"].join(",") : ["'Inter'", "sans-serif"].join(",")
    r.style.setProperty('--main-font-family', newFontStyle);
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
