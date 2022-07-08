import React from 'react'

import {
  Container,
  LeftContainer,
  RightContainer,
  Text,
  Content,
  Logo
} from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContainer>
          <Logo />
          <Text>Ignite Labs - Todos os direitos reservados</Text>
        </LeftContainer>
        <RightContainer>
          <Text>Políticas de privacidade</Text>
        </RightContainer>
      </Content>
    </Container>
  )
}

export default Footer
