import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'flex items-center justify-start'
})``

export const Content = styled.div.attrs({
  className: 'ml-4'
})``

export const Image = styled.img.attrs({
  className: 'h-12 w-12 rounded-full border-blue-500 border-2 object-cover ',
  alt: 'Imagem de perfil do professor'
})``

export const Title = styled.span.attrs({
  className: 'text-gray-100 text-lg'
})``

export const Bio = styled.p.attrs({
  className: 'text-gray-200 truncate w-40 text-xs'
})``
