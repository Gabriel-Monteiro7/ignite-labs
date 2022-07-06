import { gql, useQuery } from '@apollo/client'

import Header from './components/Header'
import LessonsTimeline from './components/LessonsTimeline'
import SelectedLesson from './components/SelectedLesson'

import { Container, InnerContainer } from './styles'

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
      <Header />
      <InnerContainer>
        <SelectedLesson />
        <LessonsTimeline />
      </InnerContainer>
    </Container>
  )
}

export default Home
