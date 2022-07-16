import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import Button from '~/components/Button'

import schema from './data'

import { Container, Title } from './styles'

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
      <Button title="garantir minha vaga" variant="contained" />
    </Container>
  )
}

export default Form
