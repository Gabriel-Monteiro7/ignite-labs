import InformationCard from './'

import { render, screen } from '~/utils/testing-library'

describe('<InformationCard/>', () => {
  const { getByTestId, getByText } = screen
  it('Check if the card uses the complementary material variant', () => {
    render(<InformationCard variant="complementaryMaterial" />)

    getByText('Material complementar')
    getByText(
      'Acesse o material complementar para acelerar o seu desenvolvimento'
    )

    getByTestId('FileArrowDownIcon')
  })

  it('Check if the card uses the Exclusive Wallpapers variant', () => {
    render(<InformationCard variant="exclusiveWallpapers" />)

    getByText('Wallpapers exclusivos')
    getByText(
      'Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina'
    )

    getByTestId('ImageIcon')
  })
})
