import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'pt-BR': {
    translation: {
      loginPage: 'Página de login',
      email: 'Email',
      password: 'Senha',
      rememberMe: 'Lembrar de mim',
      signIn: 'Entrar',

      feedbacks: {
        emailRequired: 'Email é obrigatório!',
        passwordRequired: 'Senha é obrigatória!',
        invalidEmail: 'Email inválido!',
      },
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
