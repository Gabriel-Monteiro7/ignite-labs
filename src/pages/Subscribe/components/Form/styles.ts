import styled from 'styled-components'

export const Container = styled.form.attrs({
  className: 'bg-gray-700 p-8 rounded border border-gray-500 w-full'
})`
  button {
    width: 100%;
  }
`

export const Title = styled.h6.attrs({
  className: 'text-lg lg:text-2xl text-white mb-6'
})``

export const InputsContainer = styled.form.attrs({
  className: ' my-6 '
})`
  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`
