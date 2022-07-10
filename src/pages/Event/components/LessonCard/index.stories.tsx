import { add } from 'date-fns'

import LessonCard from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const StoryLessonCard: ComponentMeta<typeof LessonCard> = {
  title: 'LessonCard',
  component: LessonCard,
  argTypes: {
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

export default StoryLessonCard
