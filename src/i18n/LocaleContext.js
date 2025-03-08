import React, { createContext, useState } from 'react';
import I18n, { setLocale } from './i18n'

export const LocaleContext = createContext({
  localeProvider: undefined,
  t: undefined
})

export const LocaleContextProvider = props => {
  const [locale, setLocaleState] = useState(I18n.locale)

  const changeLocale = newLocale => {
    setLocaleState(newLocale)
    setLocale(newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {props.children}
    </LocaleContext.Provider>
  )
}

export default LocaleContext
