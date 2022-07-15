import styled from 'styled-components'

export const Container = styled.div.attrs({
  className: 'bg-gray-900 flex flex-col min-h-screen'
})`
  @media (max-width: 1023px) {
    max-height: 100vh;
  }
`

export const InnerContainer = styled.main.attrs({
  className: 'flex flex-1  overflow-y-auto'
})``
