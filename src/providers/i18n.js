import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  'en-US': {
    translation: {
      app_title: 'Nexti React Challenge',
      loginPage: 'Login page',
      email: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      signIn: 'Sign In',
      help: 'Help',
      settings: 'Settings',
      myProfile: 'My profile',
      exit: 'Exit',
      confirm: 'Confirm',
      cancel: 'Cancel',
      switchTheme: 'Switch theme',
      changeLanguage: 'Change language',
      language: 'Language',
      'pt-BR': 'Brazilian Portuguese',
      'en-US': 'English',
      'es-ES': 'Spanish',

      feedbacks: {
        requiredEmail: 'Required email!',
        requiredPassword: 'Required password!',
        invalidEmail: 'Invalid email!',
      },
    },
  },
  'pt-BR': {
    translation: {
      app_title: 'Desafio Nexti React',
      loginPage: 'Página de login',
      email: 'Email',
      password: 'Senha',
      rememberMe: 'Lembrar de mim',
      signIn: 'Entrar',
      help: 'Ajuda',
      settings: 'Configurações',
      myProfile: 'Meu perfil',
      exit: 'Sair',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      switchTheme: 'Alternar tema',
      changeLanguage: 'Alterar linguagem',
      language: 'Linguagem',
      'pt-BR': 'Português do Brasil',
      'en-US': 'Inglês',
      'es-ES': 'Espanhol',

      feedbacks: {
        requiredEmail: 'Email é obrigatório!',
        requiredPassword: 'Senha é obrigatória!',
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
