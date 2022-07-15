import Footer from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

const StoryFooter: ComponentMeta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  decorators: [withRouter]
}

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default: ComponentMeta<typeof Footer> = Template.bind({})

export default StoryFooter
