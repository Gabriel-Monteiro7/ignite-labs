import InformationCard from '.'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center } from './styles'

const StoryFooter: ComponentMeta<typeof InformationCard> = {
  title: 'InformationCard',
  component: InformationCard
}

const Template: ComponentStory<typeof InformationCard> = (args) => (
  <Center>
    <InformationCard {...args} />
  </Center>
)

export const ComplementaryMaterial: ComponentMeta<typeof InformationCard> =
  Template.bind({})

ComplementaryMaterial.args = {
  variant: 'complementaryMaterial'
}

export const ExclusiveWallpapers: ComponentMeta<typeof InformationCard> =
  Template.bind({})

ExclusiveWallpapers.args = {
  variant: 'exclusiveWallpapers'
}

export default StoryFooter
