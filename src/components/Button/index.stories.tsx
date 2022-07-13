import Button from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DiscordLogo, Lightning } from 'phosphor-react'
import { Center } from './styles'

const StoryFooter: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    }
  }
}

const Template: ComponentStory<typeof Button> = (args) => (
  <Center>
    <Button {...args} />
  </Center>
)

export const Outlined: ComponentMeta<typeof Button> = Template.bind({})

Outlined.args = {
  icon: <Lightning />,
  title: 'Acesse o desafio',
  variant: 'outlined'
}

export const Contained: ComponentMeta<typeof Button> = Template.bind({})

Contained.args = {
  icon: <DiscordLogo />,
  title: 'Comunidade no discord',
  variant: 'contained'
}

export default StoryFooter
