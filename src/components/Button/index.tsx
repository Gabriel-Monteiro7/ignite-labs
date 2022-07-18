import React, { ReactElement } from 'react'

import { Container, Title } from './styles'

type ButtonProps = {
  title: string
  icon?: ReactElement
  variant: 'contained' | 'outlined'
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ variant, title, icon, ...props }) => {
  return (
    <Container $variant={variant} {...props}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
