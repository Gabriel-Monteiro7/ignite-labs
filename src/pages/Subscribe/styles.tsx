import styled from 'styled-components'

import PrintImage from '~/assets/images/groupMock.png'

export const Container = styled.div.attrs({
  className:
    'bg-blur min-h-screen bg-cover bg-no-repeat flex items-center flex-col'
})``

export const Content = styled.div.attrs({
  className:
    'w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto flex-col lg:flex-row'
})``

export const LeftContent = styled.div.attrs({
  className: 'md:max-w-[640px] text-center lg:text-start'
})`
  @media (max-width: 1023px) {
    svg {
      margin: auto;
    }
  }
`

export const RightContent = styled.div.attrs({
  className: 'max-w-auto sm:max-w-[390px] w-full mt-8 lg:mt-0'
})``

export const Image = styled.img.attrs({
  className: 'mt-10',
  src: PrintImage
})``

export const Title = styled.h1.attrs({
  className: 'text-3xl lg:text-[2.5rem] mb-6 mt-8'
})``

export const ColorfulTitle = styled.span.attrs({
  className: 'text-blue-500'
})``

export const Description = styled.p.attrs({
  className: 'text-sm text-gray-200'
})``
