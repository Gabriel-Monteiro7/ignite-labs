import Header from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const StoryHeader: ComponentMeta<typeof Header> = {
  title: 'Header',
  component: Header
}

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default: ComponentMeta<typeof Header> = Template.bind({})

export default StoryHeader
