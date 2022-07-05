import { gql, useQuery } from '@apollo/client'
import React from 'react'
import Footer from '~/components/Footer'

import { Container } from './styles'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        avatarURL
        id
        name
        bio
      }
    }
  }
`
const Home: React.FC = () => {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <Container>
      <Footer />
    </Container>
  )
}

export default Home
