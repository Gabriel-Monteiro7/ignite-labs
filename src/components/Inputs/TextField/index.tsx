import { UseFormRegisterReturn } from 'react-hook-form'

import { Container, Label, Input, ErrorMessage } from './styles'

type TextFieldProps = {
  label?: string
  name: string
  type?: string
  placeholder?: string
  error?: string
  register: UseFormRegisterReturn
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  register,
  ...props
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...props} {...register} $error={!!error} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
}

export default TextField
