import styled from 'styled-components'

import { Link as _Link } from 'react-router-dom'

import _Logo from '~/components/Logo'

export const Container = styled.div.attrs({
  className: 'min-w-screen bg-gray-900'
})``

export const Content = styled.div.attrs({
  className:
    'flex justify-between items-center flex-col border-t-2 border-gray-500 p-6 m-auto flex-wrap lg:flex-row'
})``

export const LeftContainer = styled.div.attrs({
  className: 'flex justify-between items-center flex-col flex-wrap lg:flex-row '
})`
  svg {
    margin-right: 1rem;
  }
`

export const RightContainer = styled.div``

export const Text = styled.p.attrs({
  className: 'text-gray-300 mt-3 text-sm lg:mt-0 lg:text-base'
})``

export const Logo = styled(_Logo)``

export const LinkToHome = styled(_Link).attrs({
  className: 'text-gray-300 mt-3 text-sm lg:mt-0 lg:text-base',
  to: '/'
})``

export const Link = styled(_Link)``
