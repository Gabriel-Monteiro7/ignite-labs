import Footer from './'

import { render, screen } from '~/utils/testing-library'

describe('<Footer/>', () => {
  const { getByText, getByRole } = screen
  it('Check if the texts are correct', () => {
    render(<Footer />)

    getByText('Ignite Labs')
    getByText('Ignite Labs - Todos os direitos reservados')
    getByText('Políticas de privacidade')
  })
  it('Check if the image is correct', () => {
    render(<Footer />)
    const image = getByRole('img')

    expect(image).toHaveAttribute('alt', 'Imagem de um astronauta')
  })
})
