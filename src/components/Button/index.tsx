import React, { ReactElement } from 'react'

import { Container, Title } from './styles'

type ButtonProps = {
  title: string
  icon?: ReactElement
  variant: 'contained' | 'outlined'
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ variant, title, icon, onClick }) => {
  return (
    <Container $variant={variant} onClick={onClick}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
