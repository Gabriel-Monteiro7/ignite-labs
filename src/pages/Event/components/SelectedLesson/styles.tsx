import styled from 'styled-components'

import {
  DiscordLogo as _DiscordLogo,
  Lightning as _Lightning
} from 'phosphor-react'
import Loader from '~/components/Loader'

export const Container = styled.div.attrs({
  className: 'flex-1 text-white'
})``

export const InnerContainer = styled.div.attrs({
  className: 'mb-10 '
})``

export const VideoContainer = styled.div.attrs({
  className: 'bg-black flex justify-center'
})``

export const Video = styled.div.attrs({
  className: 'h-full w-full max-w-[1100px] max-h-[80vh] aspect-video'
})``

export const Content = styled.div.attrs({
  className:
    'm-auto max-w-[1100px] py-8 px-6 flex items-start gap-16 lg:flex-row flex-col flex-wrap'
})``

export const InnerContent = styled.div.attrs({
  className: ' flex-1 w-full '
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

export const CardContainer = styled.div.attrs({
  className: ' flex flex-col sm:flex-row gap-5 w-full flex-wrap'
})``

export const LoaderContent = () => (
  <Loader width="100%" height="320">
    <rect x="0" y="0" rx="8" ry="8" width="100%" height="70" />

    <rect x="0" y="110" rx="4" ry="4" width="100%" height="20" />
    <rect x="0" y="145" rx="4" ry="4" width="100%" height="20" />
    <rect x="0" y="180" rx="4" ry="4" width="100%" height="20" />

    <circle cx="30" cy="280" r="30" />
    <rect x="80" y="255" rx="4" ry="4" width="200" height="50" />
  </Loader>
)

export const LoaderVideo = () => (
  <Loader width="100%" height="100%">
    <rect x="0" y="0" rx="1" ry="1" width="100%" height="100%" />
  </Loader>
)
