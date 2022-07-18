import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'Preencha esse campo para continuar'
  },
  string: {
    email: 'Preencha um e-mail válido'
  }
})
