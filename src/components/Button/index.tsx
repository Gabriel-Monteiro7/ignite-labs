import { Container } from './styles'

export type Variants = 'text' | 'contained' | 'outlined'

type ButtonProps = {
  text?: string
  variant?: Variants
}

const Button: React.FC<ButtonProps> = ({
  text = 'Default',
  variant = 'text'
}) => {
  return <Container variant={variant}>{text}</Container>
}

export default Button
