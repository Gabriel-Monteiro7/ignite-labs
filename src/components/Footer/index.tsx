import React from 'react'

import {
  Container,
  LeftContainer,
  RightContainer,
  Text,
  Content,
  Logo,
  Link,
  LinkToHome
} from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContainer>
          <Link to="/event">
            <Logo />
          </Link>
          <Text>Ignite Labs - Todos os direitos reservados</Text>
        </LeftContainer>
        <RightContainer>
          <LinkToHome>Voltar para a Home</LinkToHome>
        </RightContainer>
      </Content>
    </Container>
  )
}

export default Footer
