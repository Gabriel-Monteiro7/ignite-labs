import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useContext } from '../../context'

import { useGetLessonsQuery } from '~/graphql/generated'

import LessonCard from '../LessonCard'

import Loading from './Loading'

import { Container, Title, LessonsContainer } from './styles'

type Params = {
  slug?: string
}

const SelectedLesson: React.FC = () => {
  const { slug } = useParams<Params>()
  const navigate = useNavigate()

  const { state } = useContext()

  const { loading, data } = useGetLessonsQuery()

  const handleRedirect = (redirect = '/') => {
    navigate(redirect, {
      replace: true
    })
  }

  useEffect(() => {
    if (loading) return
    const lessonDefault = data?.lessons[0]

    if (!lessonDefault) handleRedirect()
    else if (!slug) handleRedirect('/event/lesson/' + lessonDefault.slug)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.lessons, loading, slug])

  return (
    <Container $openLessonsTimeline={state.openLessonsTimeline}>
      <Title>Cronograma das aulas</Title>
      {loading && <Loading />}
      <LessonsContainer>
        {data?.lessons.map((lesson) => (
          <LessonCard {...lesson} key={lesson?.id} />
        ))}
      </LessonsContainer>
    </Container>
  )
}

export default SelectedLesson
