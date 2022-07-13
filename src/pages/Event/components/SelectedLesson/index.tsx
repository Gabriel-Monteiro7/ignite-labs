import { gql, useQuery } from '@apollo/client'
import { useEffect, ReactElement } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import Footer from '~/components/Footer'
import Button from '~/components/Button'

import Profile from '../Profile'

import { HomeRoute } from '~/routes/routes'

import {
  Container,
  InnerContainer,
  VideoContainer,
  Content,
  Title,
  Description,
  InnerContent,
  ButtonContainer,
  DiscordLogo,
  Lightning
} from './styles'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`

interface GetLessonBySlugReponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

type Params = {
  slug?: string
}

type Button = {
  icon?: ReactElement
  title: string
  variant: 'contained' | 'outlined'
}

const SelectedLesson: React.FC = () => {
  const { slug } = useParams<Params>()
  const navigate = useNavigate()
  const location = useLocation()

  const { data, loading } = useQuery<GetLessonBySlugReponse>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: {
        slug
      }
    }
  )

  const buttons: Button[] = [
    {
      icon: <DiscordLogo />,
      title: 'Comunidade no discord',
      variant: 'contained'
    },
    { icon: <Lightning />, title: 'Acesse o desafio', variant: 'outlined' }
  ]

  useEffect(() => {
    const shouldRedirect = !loading && !data?.lesson && slug

    if (shouldRedirect) navigate(HomeRoute.url)
  }, [loading, data, navigate, location.key, slug])

  return (
    <Container>
      {loading ? (
        <div>asdasd</div>
      ) : (
        <InnerContainer>
          <VideoContainer />
          <Content>
            <InnerContent>
              <Title>{data?.lesson?.title}</Title>
              <Description>{data?.lesson?.description}</Description>
              <Profile {...data?.lesson?.teacher} />
            </InnerContent>

            <ButtonContainer>
              {buttons.map((button, index) => (
                <Button {...button} key={index} />
              ))}
            </ButtonContainer>
          </Content>
        </InnerContainer>
      )}

      <Footer />
    </Container>
  )
}

export default SelectedLesson
