import React from 'react'

import { gql, useQuery } from '@apollo/client'

import { useContext } from '../../context'

import LessonCard from '../LessonCard'

import { Container, Title } from './styles'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    slug: string
    title: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}

const SelectedLesson: React.FC = () => {
  const { state } = useContext()

  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <Container $openLessonsTimeline={state.openLessonsTimeline}>
      <Title>Cronograma das aulas</Title>
      {data?.lessons.map((lesson) => (
        <LessonCard {...lesson} key={lesson?.id} />
      ))}
    </Container>
  )
}

export default SelectedLesson
