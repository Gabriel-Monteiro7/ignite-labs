import React from 'react'
import { formatDate } from '~/utils'

import { isPast } from 'date-fns'

import {
  Container,
  LessonTypeLabelAvailable,
  AvailableAt,
  LessonType,
  Content,
  Header,
  Title,
  Lock,
  CheckCircle
} from './styles'

type LessonCardProps = {
  title: string
  lessonType: 'class' | 'live'
  availableAt: string
  slug: string
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  lessonType,
  availableAt,
  slug
}) => {
  const isLessonAvailable = isPast(new Date(availableAt))
    ? 'available'
    : 'unAvailable'

  const lessonAvailableType = {
    available: {
      icon: <CheckCircle />,
      title: 'Conteúdo liberado',
      color: 'text-blue-500'
    },
    unAvailable: {
      icon: <Lock />,
      title: 'Em breve',
      color: 'text-orange-500'
    }
  }

  const lessonTypes = {
    live: {
      title: 'ao vivo'
    },
    class: {
      title: 'aula prática'
    }
  }

  const {
    icon,
    title: lessonTypeLabelAvailable,
    color: labelColor
  } = lessonAvailableType[isLessonAvailable]

  const { title: lessonTypeLabel } = lessonTypes[lessonType]

  return (
    <Container>
      <AvailableAt>
        {formatDate(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm")}
      </AvailableAt>
      <Content>
        <Header>
          <LessonTypeLabelAvailable $labelColor={labelColor}>
            {icon} {lessonTypeLabelAvailable}
          </LessonTypeLabelAvailable>
          <LessonType $isLive={lessonType === 'live'}>
            {lessonTypeLabel}
          </LessonType>
        </Header>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}

export default LessonCard
