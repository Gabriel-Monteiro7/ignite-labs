import Footer from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'

const StoryFooter: ComponentMeta<typeof Footer> = {
  title: 'Footer',
  component: Footer
}

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default: ComponentMeta<typeof Footer> = Template.bind({})

export default StoryFooter
