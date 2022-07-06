import styled from 'styled-components'

import Astronaut from '~/assets/images/astronaut.svg'

export const Container = styled.div.attrs({
  className: 'w-full absolute bottom-0 left-0 bg-gray-900'
})``

export const Content = styled.div.attrs({
  className:
    'flex justify-between items-center flex-col border-t-2 border-gray-500 py-6 m-auto md:flex-row'
})`
  width: calc(100vw - 3rem);
`

export const Image = styled.img.attrs({
  src: Astronaut,
  className: 'h-10  object-cover block mr-1'
})``

export const LeftContainer = styled.div.attrs({
  className: 'flex justify-between items-center flex-col md:flex-row'
})``

export const RightContainer = styled.div``

export const Text = styled.p.attrs({
  className: 'text-gray-300 mt-3 text-sm md:mt-0 md:text-base'
})``

export const BrandText = styled.span.attrs({
  className: 'text-white flex justify-between items-center mr-8 text-2xl'
})``
