import Button from './'

import { render, screen } from '~/utils/testing-library'

import { variants } from './styles'
import { DiscordLogo, Lightning } from 'phosphor-react'

const buttons = {
  contained: {
    icon: <DiscordLogo data-testid="discordLogo" />,
    title: 'Comunidade no discord'
  },
  outlined: {
    icon: <Lightning data-testid="lightningIcon" />,
    title: 'Acesse o desafio'
  }
}

describe('<Button/>', () => {
  const { getByTestId, getByRole } = screen
  it('Check if the button uses the outlined variant', () => {
    render(<Button {...buttons.outlined} variant="outlined" />)

    const button = getByRole('button', { name: 'Acesse o desafio' })
    getByTestId('lightningIcon')

    expect(button).toHaveClass(variants.outlined)
  })

  it('Check if the button uses the contained variant', () => {
    render(<Button {...buttons.contained} variant="contained" />)
    const button = getByRole('button', { name: 'Comunidade no discord' })

    getByTestId('discordLogo')

    expect(button).toHaveClass(variants.contained)
  })
})
