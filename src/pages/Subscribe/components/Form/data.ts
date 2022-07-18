import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup
  .object({
    email: yup.string().email().required(),
    name: yup.string().required()
  })
  .required()

export default yupResolver(schema)
