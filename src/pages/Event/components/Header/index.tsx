import React from 'react'
import useMediaQuery from '~/hooks/useMediaQuery'

import { useContext, Types } from '../../context'

import { Container, ToogleContainer, ToggleIcon, Logo } from './styles'

const Header: React.FC = () => {
  const { state, dispatch } = useContext()
  const desktopLayout = useMediaQuery('lg')

  const handleOpenLessonsTimeline = () => {
    dispatch({
      type: Types.toogleOpenLessonsTimeline
    })
  }

  return (
    <Container>
      <Logo />
      {!desktopLayout && (
        <ToogleContainer onClick={handleOpenLessonsTimeline}>
          Aulas <ToggleIcon $openLessonsTimeline={state.openLessonsTimeline} />
        </ToogleContainer>
      )}
    </Container>
  )
}

export default Header
