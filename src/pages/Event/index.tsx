import { Provider } from './context'

import Header from './components/Header'
import LessonsTimeline from './components/LessonsTimeline'
import SelectedLesson from './components/SelectedLesson'

import { Container, InnerContainer } from './styles'

const Event: React.FC = () => {
  return (
    <Provider>
      <Container>
        <Header />
        <InnerContainer>
          <SelectedLesson />
          <LessonsTimeline />
        </InnerContainer>
      </Container>
    </Provider>
  )
}

export default Event
