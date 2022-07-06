import React from 'react'

import { Container } from './styles'

import Logo from '~/components/Logo'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header
