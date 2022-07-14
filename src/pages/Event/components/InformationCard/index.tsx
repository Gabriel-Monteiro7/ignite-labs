import React from 'react'

import { variants, variantsType } from './variants'

import {
  Container,
  IconContainer,
  Content,
  Title,
  Description,
  ArrowIcon,
  ArrowContainer
} from './styles'

export type InformationCardProps = {
  variant: keyof variantsType
}

const InformationCard: React.FC<InformationCardProps> = ({ variant }) => {
  const { title, icon, description } = variants[variant]

  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <ArrowContainer>
        <ArrowIcon />
      </ArrowContainer>
    </Container>
  )
}

export default InformationCard
