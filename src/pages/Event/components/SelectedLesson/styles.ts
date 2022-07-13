import styled from 'styled-components'

import {
  DiscordLogo as _DiscordLogo,
  Lightning as _Lightning
} from 'phosphor-react'

export const Container = styled.div.attrs({
  className: 'flex-1 text-white '
})``

export const InnerContainer = styled.div.attrs({
  className: ' mb-10'
})``

export const VideoContainer = styled.div.attrs({
  className: 'bg-white w-full max-h-[60vh] aspect-video'
})``

export const Content = styled.div.attrs({
  className: 'py-8 px-6 flex items-start gap-16 lg:flex-row flex-col'
})``

export const InnerContent = styled.div.attrs({
  className: 'flex-1'
})``

export const Title = styled.h6.attrs({
  className: ' text-gray-100 font-semibold text-xl mb-6'
})``

export const Description = styled.p.attrs({
  className: 'text-gray-200 min-h-[6rem] mb-6'
})``

export const ButtonContainer = styled.div.attrs({
  className: ' flex flex-col gap-4 w-full sm:w-auto'
})``

export const DiscordLogo = styled(_DiscordLogo).attrs({
  'data-testid': 'DiscordLogo'
})``

export const Lightning = styled(_Lightning).attrs({
  'data-testid': 'LightningIcon'
})``
