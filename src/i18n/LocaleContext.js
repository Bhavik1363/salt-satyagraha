import React, { createContext, useState, useEffect } from 'react';
import I18n from './i18n';

let r = document.documentElement;

export const LocaleContext = createContext({
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
    
    let newFontStyle = newLocale === "gu" ? ["'Noto Sans Gujarati'", "sans-serif"].join(",") : newLocale === "hn" ? ["'Noto Sans Devanagari'", "sans-serif"].join(",") : ["'Inter'", "sans-serif"].join(",")
    console.log(newFontStyle)

    console.log(r)

    r.style.setProperty('--main-font-family', newFontStyle);
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
