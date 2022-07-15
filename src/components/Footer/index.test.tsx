import Footer from './'

import { render, screen } from '~/utils/testing-library'

describe('<Footer/>', () => {
  const { getByText, getByTestId } = screen
  it('Check if the texts are correct', () => {
    render(<Footer />)

    getByText('Ignite Labs - Todos os direitos reservados')
    getByText('Voltar para a Home')
  })
  it('Check if the image is correct', () => {
    render(<Footer />)

    getByTestId('logo')
  })
})
