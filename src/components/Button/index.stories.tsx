import Button from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const StoryButton: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Text: ComponentMeta<typeof Button> = Template.bind({})

export const Contained: ComponentMeta<typeof Button> = Template.bind({})

Contained.args = { variant: 'contained', text: 'Contained' }

export const Outlined: ComponentMeta<typeof Button> = Template.bind({})

Outlined.args = { variant: 'outlined', text: 'Outlined' }

export default StoryButton
