import React from 'react'

import {
  Container,
  Image,
  LeftContainer,
  RightContainer,
  Text,
  BrandText,
  Content
} from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftContainer>
          <BrandText>
            <Image />
            Ignite Labs
          </BrandText>
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
