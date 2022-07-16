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
  className: 'md:max-w-[640px]'
})``

export const RightContent = styled.div.attrs({
  className: ''
})``

export const Image = styled.img.attrs({
  className: 'mt-10',
  src: PrintImage
})``

export const Title = styled.h1.attrs({
  className: 'text-[2.5rem]'
})``

export const ColorfulTitle = styled.span.attrs({
  className: 'text-blue-500'
})``
