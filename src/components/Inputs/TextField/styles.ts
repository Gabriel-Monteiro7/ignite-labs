import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: ''
})`
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const Label = styled.span.attrs({
  className: 'text-gray-300 text-sm'
})``

export const Input = styled.input.attrs({
  className:
    'placeholder:text-gray-300 text-gray-300 bg-gray-900 py-2 px-4 rounded h-16 flex w-full focus:outline-none focus:ring-blue-500 focus:ring-1'
})``

export const FormStoryBook = styled.div.attrs({
  className: 'max-w-auto sm:max-w-[390px] w-full m-auto'
})``
