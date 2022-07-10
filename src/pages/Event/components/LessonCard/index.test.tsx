import { add } from 'date-fns'

import LessonCard from './'

import { render, screen } from '~/utils/testing-library'
import { formatDate } from '~/utils'

describe('<LessonCard/>', () => {
  const { getByText, getByTestId } = screen
  it('Show the released content card', () => {
    const availableLesson = {
      availableAt: '2022-06-19T22:00:00+00:00',
      id: 'cl58a42y7rrrm0bklcc4e4lrk',
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
      id: 'cl5fslmq592710blpskxqnzvn',
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
})
