import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, UseFormRegisterReturn } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'

import Button from '~/components/Button'
import TextField from '~/components/Inputs/TextField'

import schema from './data'

import { Container, Title, InputsContainer } from './styles'

interface IFormInputs {
  name: string
  email: string
}

interface IInput {
  name: keyof IFormInputs
  type: string
  placeholder: string
  register: UseFormRegisterReturn
}

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

const Form: React.FC = () => {
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInputs>({
    resolver: schema
  })

  const inputs: IInput[] = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Seu nome completo',
      register: { ...register('name') }
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Digite seu email',
      register: { ...register('email') }
    }
  ]

  const onSubmit: SubmitHandler<IFormInputs> = async (values) => {
    const { email, name } = values
    try {
      await createSubscriber({
        variables: {
          email,
          name
        }
      })

      navigate('/event', { replace: true })
      // eslint-disable-next-line no-empty
    } catch {}
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Title>Inscreva-se gratuitamente</Title>
      <InputsContainer>
        {inputs.map((input, index) => (
          <TextField
            {...input}
            key={index}
            error={errors[input.name]?.message}
          />
        ))}
      </InputsContainer>

      <Button
        title={loading ? 'Carregando...' : 'garantir minha vaga'}
        variant="contained"
        disabled={loading}
      />
    </Container>
  )
}

export default Form
