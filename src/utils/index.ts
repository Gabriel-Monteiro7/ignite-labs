import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ThemeState } from '~/context'
import { LocalStorageService } from '~/services/LocalStorage'

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

export const formatDate = (date: string, _format = "dd'/'MM'/'yyyy") => {
  return format(new Date(date), _format, {
    locale: ptBR
  })
}

export const getTheme = () =>
  LocalStorageService.getItem<ThemeState>('@theme') ?? 'dark'
