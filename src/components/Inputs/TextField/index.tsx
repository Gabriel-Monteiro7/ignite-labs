import { UseFormRegisterReturn } from 'react-hook-form'

import { Container, Label, Input } from './styles'

type TextFieldProps = {
  label?: string
  name: string
  type?: string
  placeholder?: string
  error?: string
  register: UseFormRegisterReturn
}

const TextField: React.FC<TextFieldProps> = ({ label, register, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...props} {...register} />
    </Container>
  )
}

export default TextField
