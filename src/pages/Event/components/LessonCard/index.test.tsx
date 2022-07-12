import { add } from 'date-fns'

import LessonCard from './'

import { render, screen } from '~/utils/testing-library'
import { formatDate } from '~/utils'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate(),
  useParams: jest.fn().mockReturnValue({
    slug: 'aula-01-criando-o-projeto-e-realizando-o-setup-inicial'
  })
}))

describe('<LessonCard/>', () => {
  const { getByText, getByTestId, getByRole } = screen
  it('Show the released content card', () => {
    const availableLesson = {
      availableAt: '2022-06-19T22:00:00+00:00',
      slug: 'abertura-do-evento-ignite-labs',
      title: 'Abertura do evento Ignite labs'
    }

    render(<LessonCard {...availableLesson} lessonType="live" />)

    getByText(/Abertura do evento Ignite labs/i)
    getByText(/Conteúdo liberado/i)
    getByTestId(/checkCircleIcon/i)
    getByText(/Ao Vivo/i)
    getByText(/Domingo • 19 de junho • 19h00/i)
  })

  it('Show unreleased content card', () => {
    const dayInFuture = add(new Date(), { hours: 1 }).toString()

    const unAvailableLesson = {
      availableAt: dayInFuture,
      slug: 'aula-02-titulo-aula-ignite-labs',
      title: 'Aula 02 - Titulo aula ignite labs'
    }

    render(<LessonCard {...unAvailableLesson} lessonType="class" />)

    getByText(/Aula 02 - Titulo aula ignite labs/i)
    getByText(/Em breve/i)
    getByTestId(/lockIcon/i)
    getByText(/Aula Prática/i)
    getByText(formatDate(dayInFuture, "EEEE' • 'd' de 'MMMM' • 'k'h'mm"))
  })
  it('Show selected content card', () => {
    const availableLesson = {
      availableAt: '2022-06-19T22:00:00+00:00',
      slug: 'aula-01-criando-o-projeto-e-realizando-o-setup-inicial',
      title: 'Aula 01 - Criando o projeto e realizando o setup inicial'
    }

    render(<LessonCard {...availableLesson} lessonType="live" />)

    const link = getByRole('link')

    expect(link).toHaveAttribute(
      'href',
      '/event/lesson/aula-01-criando-o-projeto-e-realizando-o-setup-inicial'
    )

    expect(link.children[1]).toHaveClass('bg-green-500 border-green-500')
  })
})
