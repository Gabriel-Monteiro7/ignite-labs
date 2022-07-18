import { useParams } from 'react-router-dom'

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
  availableAt?: string
  slug: string
}

type Params = {
  slug?: string
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  lessonType,
  availableAt = '',
  slug
}) => {
  const params = useParams<Params>()

  const isSelected = slug === params?.slug

  const isLessonAvailable = isPast(new Date(availableAt))
    ? 'available'
    : 'unAvailable'

  const lessonAvailableType = {
    available: {
      icon: <CheckCircle />,
      title: 'Conteúdo liberado',
      color: 'text-blue-500',
      pointerBlock: false
    },
    unAvailable: {
      icon: <Lock />,
      title: 'Em breve',
      color: 'text-orange-500',
      pointerBlock: true
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
    color: labelColor,
    pointerBlock
  } = lessonAvailableType[isLessonAvailable]

  const { title: lessonTypeLabel } = lessonTypes[lessonType]

  const availableAtFormatted = formatDate(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm"
  )

  const handleGotoLesson = () => {
    if (isLessonAvailable === 'unAvailable') return ''

    return `/event/lesson/${slug}`
  }

  return (
    <Container to={handleGotoLesson()} $pointerBlock={pointerBlock}>
      <AvailableAt>{availableAtFormatted}</AvailableAt>
      <Content $isSelected={isSelected}>
        <Header>
          <LessonTypeLabelAvailable
            $labelColor={labelColor}
            $isSelected={isSelected}
          >
            {icon} {lessonTypeLabelAvailable}
          </LessonTypeLabelAvailable>
          <LessonType $isLive={lessonType === 'live'} $isSelected={isSelected}>
            {lessonTypeLabel}
          </LessonType>
        </Header>
        <Title $isSelected={isSelected}>{title}</Title>
      </Content>
    </Container>
  )
}

export default LessonCard
