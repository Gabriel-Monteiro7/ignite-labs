import { gql, useQuery } from '@apollo/client'
import { useEffect, ReactElement } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import Footer from '~/components/Footer'
import Button from '~/components/Button'

import Profile from '../Profile'
import InformationCard from '../InformationCard'

import { HomeRoute } from '~/routes/routes'

import ReactPlayer from 'react-player/youtube'

import {
  Container,
  InnerContainer,
  VideoContainer,
  Video,
  Content,
  Title,
  Description,
  InnerContent,
  ButtonContainer,
  DiscordLogo,
  Lightning,
  CardContainer
} from './styles'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoUrl
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
    videoUrl: string
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

type Card = 'exclusiveWallpapers' | 'complementaryMaterial'

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

  const cards: Card[] = ['complementaryMaterial', 'exclusiveWallpapers']

  useEffect(() => {
    const shouldRedirect = !loading && !data?.lesson && slug

    if (shouldRedirect) navigate(HomeRoute.url)
  }, [loading, data, navigate, location.key, slug])

  return (
    <Container>
      {!data || !data.lesson ? (
        <div>Carregando</div>
      ) : (
        <InnerContainer>
          <VideoContainer>
            <Video>
              <ReactPlayer
                controls
                url={data?.lesson?.videoUrl}
                width="100%"
                height="100%"
              />
            </Video>
          </VideoContainer>
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
            <CardContainer>
              {cards.map((card, index) => (
                <InformationCard variant={card} key={index} />
              ))}
            </CardContainer>
          </Content>
        </InnerContainer>
      )}

      <Footer />
    </Container>
  )
}

export default SelectedLesson
