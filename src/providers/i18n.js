import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'pt-BR': {
    translation: {
      bemVindoAoSistema: 'Bem vindo ao sistema!',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
