import styled from 'styled-components'

export const variants = {
  contained: `bg-green-500 hover:bg-green-700`,
  outlined: `border-blue-500 border !text-blue-500 hover:bg-blue-500 hover:!text-gray-900`
}

interface IContainer {
  $variant: 'contained' | 'outlined'
}

export const Container = styled.button.attrs<IContainer>(({ $variant }) => {
  const variant = variants[$variant]

  const className =
    'h-14 w-full sm:w-60 flex gap-2 justify-center items-center text-white transition-colors rounded font-semibold uppercase text-sm disabled:opacity-50 ' +
    variant

  return {
    className
  }
})<IContainer>`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Title = styled.span.attrs({
  className: ''
})``

export const Center = styled.div.attrs({
  className: 'flex justify-center items-center min-h-screen'
})``
