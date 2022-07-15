import styled, { css } from 'styled-components'

import { Link } from 'react-router-dom'

import { CheckCircle as _CheckCircle, Lock as _Lock } from 'phosphor-react'
interface ILessonTypeLabelAvailable {
  $labelColor: string
  $isSelected: boolean
}

interface ILessonType {
  $isLive: boolean
  $isSelected: boolean
}

interface IContent {
  $isSelected: boolean
}

interface ITitle {
  $isSelected: boolean
}

interface IContainer {
  $pointerBlock: boolean
}

export const Container = styled(Link).attrs<IContainer>(
  ({ $pointerBlock }) => ({
    className: `group ${$pointerBlock && 'pointer-events-none	'}`
  })
)<IContainer>``

export const AvailableAt = styled.p.attrs({
  className: 'text-gray-300 first-letter:uppercase'
})``

export const Content = styled.div.attrs<IContent>(({ $isSelected }) => {
  const classIsSelected = $isSelected ? ' bg-green-500 border-green-500' : ''

  const className =
    `border-gray-500 border my-2 p-4 rounded group-hover:border-green-500 transition relative before:transition` +
    classIsSelected

  return {
    className
  }
})<IContent>`
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      &::before {
        content: '';
        width: 1rem;
        height: 1rem;
        background: #00875f;
        left: -8px;
        position: absolute;
        top: 2.5rem;
        border-radius: 2px;
        transform: rotate(45deg);
      }
    `}
`

export const LessonType = styled.span.attrs<ILessonType>(
  ({ $isLive, $isSelected }) => {
    const classIsLive = $isLive ? 'text-green-300' : 'text-white'

    const classIsSelected = $isSelected ? ' !text-white !border-white' : ''

    const className =
      'uppercase border-green-300 border rounded px-2 py-[0.125rem] text-xs ' +
      classIsLive +
      classIsSelected

    return {
      className
    }
  }
)<ILessonType>``

export const LessonTypeLabelAvailable = styled.span.attrs<ILessonTypeLabelAvailable>(
  ({ $labelColor, $isSelected }) => {
    const classIsSelected = $isSelected ? ' !text-white' : ''

    const className =
      'flex gap-1 items-center text-sm ' + $labelColor + classIsSelected

    return { className }
  }
)<ILessonTypeLabelAvailable>``

export const Header = styled.header.attrs({
  className: 'flex justify-between items-center mb-4'
})``

export const Title = styled.strong.attrs<ITitle>(({ $isSelected }) => ({
  className: `text-gray-200 ${$isSelected ? '!text-white' : ''} `
}))<ITitle>``

export const CheckCircle = styled(_CheckCircle).attrs({
  size: 20,
  'data-testid': 'checkCircleIcon'
})``

export const Lock = styled(_Lock).attrs({
  size: 20,
  'data-testid': 'lockIcon'
})``
