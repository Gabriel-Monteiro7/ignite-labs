import { FC } from 'react'

import { Container, Toggle, Button } from './styles'

type SwitchProps = {
  selected?: boolean
  onChange: () => void
}

const Switch: FC<SwitchProps> = ({ selected, onChange }) => {
  return (
    <Container>
      <Toggle checked={selected} />
      <Button onClick={onChange} />
    </Container>
  )
}

export default Switch
