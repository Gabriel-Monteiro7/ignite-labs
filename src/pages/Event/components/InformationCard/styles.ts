import styled from 'styled-components'

import { CaretRight } from 'phosphor-react'

export const Container = styled.a.attrs({
  className:
    'flex items-stretch justify-between bg-gray-700 rounded-md hover:bg-gray-600 transition-colors ] w-full md:w-[32rem] cursor-pointer	'
})``

export const IconContainer = styled.div.attrs({
  className: 'flex items-center bg-green-700  rounded-l p-4 md:p-6 text-white'
})`
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const Content = styled.div.attrs({
  className: 'p-6 '
})``

export const Title = styled.strong.attrs({
  className: 'text-base md:text-2xl text-gray-100'
})``

export const Description = styled.p.attrs({
  className: 'text-xs text-gray-200 mt-2 leading-relaxed'
})``

export const ArrowIcon = styled(CaretRight)``

export const ArrowContainer = styled.div.attrs({
  className: 'flex items-center pr-6 text-blue-500'
})`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
export const Center = styled.div.attrs({
  className: 'flex justify-center items-center min-h-screen'
})``
