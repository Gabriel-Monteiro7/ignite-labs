import styled from 'styled-components'

interface ILessonTypeLabelAvailable {
  $labelColor: string
}

interface ILessonType {
  $isLive: boolean
}

import { CheckCircle as _CheckCircle, Lock as _Lock } from 'phosphor-react'

export const Container = styled.div.attrs({ className: 'pt-6' })``

export const AvailableAt = styled.p.attrs({
  className: 'text-gray-300 first-letter:uppercase'
})``

export const Content = styled.div.attrs({
  className: 'border-gray-500 border my-2 p-4 rounded'
})``

export const LessonType = styled.span.attrs<ILessonType>(({ $isLive }) => ({
  className: `uppercase border-green-300 border rounded px-2 py-[0.125rem] text-xs ${
    $isLive ? 'text-green-300' : 'text-white'
  }`
}))<ILessonType>``

export const LessonTypeLabelAvailable = styled.span.attrs<ILessonTypeLabelAvailable>(
  ({ $labelColor }) => ({
    className: `flex gap-1 items-center ${$labelColor}  text-sm`
  })
)<ILessonTypeLabelAvailable>``

export const Header = styled.header.attrs({
  className: 'flex justify-between items-center mb-4'
})``

export const Title = styled.strong.attrs({
  className: 'text-gray-200 '
})``

export const CheckCircle = styled(_CheckCircle).attrs({ size: 20 })``

export const Lock = styled(_Lock).attrs({ size: 20 })``
