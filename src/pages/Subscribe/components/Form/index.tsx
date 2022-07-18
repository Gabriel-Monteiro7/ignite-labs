import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '~/components/Button'
import TextField from '~/components/Inputs/TextField'

import schema from './data'

import { Container, Title, InputsContainer } from './styles'

interface IFormInputs {
  name: string
  email: string
}

const Form: React.FC = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: schema
  })

  const onSubmit: SubmitHandler<IFormInputs> = async (values) => {
    const { email, name } = values

    navigate('/', { replace: true })
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>Inscreva-se gratuitamente</Title>
      <InputsContainer>
        <TextField
          name="name"
          type="text"
          placeholder="Seu nome completo"
          register={{ ...register('name') }}
        />
        <TextField
          name="email"
          type="email"
          placeholder="Digite seu email"
          register={{ ...register('email') }}
        />
      </InputsContainer>

      <Button title="garantir minha vaga" variant="contained" />
    </Container>
  )
}

export default Form
