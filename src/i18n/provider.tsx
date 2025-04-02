import useCurrentLanguage from '@/components/hooks/useCurrentLanguage'
import React, { Fragment, useEffect } from 'react'
import { Cookies } from 'react-cookie'
import { IntlProvider } from 'react-intl'
import { LOCALES } from './locales'
import messages from './messages'

interface IProvider {
   children: JSX.Element
   locale?: string
}

const Provider = ({ children, locale }: IProvider) => {
   const language = useCurrentLanguage()
   const cookies = new Cookies().get('language')

   locale = LOCALES[language].slice(0, 2) || LOCALES.en

   useEffect(() => {
      if (cookies) locale = LOCALES[cookies]
   }, [])

   return (
      <IntlProvider locale={locale || navigator.language} textComponent={Fragment} messages={messages[locale]}>
         {children}
      </IntlProvider>
   )
}

export default Provider
