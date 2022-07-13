import React, { ReactElement } from 'react'

import { Container, Title } from './styles'

type ButtonProps = {
  title: string
  icon?: ReactElement
  variant: 'contained' | 'outlined'
}

const Button: React.FC<ButtonProps> = ({ variant, title, icon }) => {
  return (
    <Container $variant={variant}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
