import styled, { css } from 'styled-components'

export const Container = styled.aside.attrs({
  className: `bg-gray-700 border-l border-gray-600 w-full h-full z-20 fixed
  lg:w-[348px] lg:relative lg:visible lg:h-auto p-6 max-h-[92vh] lg:max-h-full overflow-y-auto`
})<{ $openLessonsTimeline: boolean }>`
  ${({ $openLessonsTimeline }) =>
    !$openLessonsTimeline &&
    css`
      @media (max-width: 1023px) {
        visibility: hidden;
      }
    `}
`

export const Title = styled.h6.attrs({
  className:
    'text-white font-semibold text-2xl mb-6 pb-6 border-b border-gray-600'
})``

export const LessonsContainer = styled.div.attrs({
  className: 'flex flex-col gap-6'
})``
