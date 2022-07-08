import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2
})

export const formatDate = (date: Date, _format = "dd'/'MM'/'yyyy") => {
  return format(new Date(date), _format, {
    locale: ptBR
  })
}
