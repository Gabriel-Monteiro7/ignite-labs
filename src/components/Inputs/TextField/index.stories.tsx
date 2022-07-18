import TextField from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FormStoryBook } from './styles'

const StoryTextField: ComponentMeta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  argTypes: {
    register: {
      table: {
        disable: true
      }
    },
    type: {
      control: 'select',
      options: ['password', 'text', 'email'],
      defaultValue: 'email'
    }
  }
}

const Template: ComponentStory<typeof TextField> = (args) => (
  <FormStoryBook>
    <TextField {...args} />
  </FormStoryBook>
)

export const Default: ComponentMeta<typeof TextField> = Template.bind({})

Default.args = {
  name: 'email',
  placeholder: 'Digite seu Email'
}

export default StoryTextField
