import { add } from 'date-fns'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import LessonCard from '.'

const StoryLessonCard: ComponentMeta<typeof LessonCard> = {
  title: 'LessonCard',
  component: LessonCard,
  decorators: [withRouter]
}

const Template: ComponentStory<typeof LessonCard> = (args) => (
  <LessonCard {...args} />
)
export const Default: ComponentMeta<typeof LessonCard> = Template.bind({})

const dayInFuture = add(new Date(), { hours: 1 }).toString()

Default.args = {
  availableAt: dayInFuture,
  slug: 'aula-02-titulo-aula-ignite-labs',
  title: 'Aula 02 - Titulo aula ignite labs',
  lessonType: 'class'
}

Default.argTypes = {
  availableAt: {
    name: 'availableAt',
    description: 'Creation date of a lesson.',
    table: {
      type: { summary: 'Date.toDateString() result' },
      defaultValue: { summary: 'Date.now()' }
    },
    control: 'date'
  }
}

export const Selected: ComponentMeta<typeof LessonCard> = Template.bind({})

const currentDay = new Date().toString()

Selected.args = {
  availableAt: currentDay,
  slug: 'abertura-do-evento-ignite-labs',
  title: 'Abertura do evento Ignite labs',
  lessonType: 'class'
}

Selected.parameters = {
  reactRouter: {
    routePath: '/event/lesson/:slug',
    routeParams: { slug: 'abertura-do-evento-ignite-labs' }
  }
}

Selected.argTypes = {
  availableAt: {
    table: {
      disable: true
    }
  }
}

export default StoryLessonCard
