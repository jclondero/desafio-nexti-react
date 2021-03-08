import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { getLanguage } from '../services/language'

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
      favorites: 'Favorites',
      exit: 'Exit',
      search: 'Search',
      toAssign: 'To assign',
      toFile: 'To file',
      toSchedule: 'To Schedule',
      confirm: 'Confirm',
      cancel: 'Cancel',
      new: 'New',
      switchTheme: 'Switch theme',
      changeLanguage: 'Change language',
      language: 'Language',
      'pt-BR': 'Brazilian Portuguese',
      'en-US': 'English',
      'es-ES': 'Spanish',

      requiredEmail: 'Required email!',
      requiredPassword: 'Required password!',
      invalidEmail: 'Invalid email!',
      noItemsFound: 'No items found!',
      selectSubtaskMenuBeside: 'Select a subtask from the menu beside.',
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
      favorites: 'Favoritos',
      exit: 'Sair',
      search: 'Pesquisar',
      toAssign: 'Atribuir',
      toFile: 'Arquivar',
      toSchedule: 'Agendar',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      new: 'Novo',
      switchTheme: 'Alternar tema',
      changeLanguage: 'Alterar linguagem',
      language: 'Linguagem',
      'pt-BR': 'Português do Brasil',
      'en-US': 'Inglês',
      'es-ES': 'Espanhol',

      requiredEmail: 'Email é obrigatório!',
      requiredPassword: 'Senha é obrigatória!',
      invalidEmail: 'Email inválido!',
      noItemsFound: 'Nenhum item encontrado!',
      selectSubtaskMenuBeside: 'Selecione uma subtarefa no menu ao lado.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage() || 'pt-BR',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
