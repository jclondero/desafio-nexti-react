import React, { Suspense } from 'react'

import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'
import Auth from './auth'

import { ReactQueryProvider } from './reactQuery'

const Providers = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ReactQueryProvider>
        <Suspense fallback={() => <p>Carregando...</p>}>
          <Auth>{children}</Auth>
        </Suspense>
      </ReactQueryProvider>
    </I18nextProvider>
  )
}

export default Providers
