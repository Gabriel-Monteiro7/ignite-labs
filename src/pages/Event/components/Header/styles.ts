import styled, { css } from 'styled-components'

import _Logo from '~/components/Logo'

const icon = css`
  content: '';
  width: 100%;
  height: 0.15rem;
  content: '';
  position: absolute;
  left: 0;
  transform: translateY(-0.5rem);
  transition: transform 0.3s;
  border-radius: 1rem;
`

export const Logo = styled(_Logo)``

export const Container = styled.div.attrs({
  className:
    'flex items-center min-w-screen bg-gray-700 p-5 border-b border-gray-600 justify-between lg:justify-center'
})`
  svg {
    @media (max-width: 1023px) {
      width: 11rem;
    }
  }
`

export const ToogleContainer = styled.div.attrs({
  className:
    'text-white cursor-pointer opacity-75 hover:opacity-100 transition-opacity'
})`
  align-items: center;
  display: flex;
`

export const ToggleIcon = styled.span.attrs({
  className:
    'w-full h-[0.15rem] block ml-2 bg-blue-500 after:bg-blue-500 before:bg-blue-500'
})<{ $openLessonsTimeline: boolean }>`
  position: relative;
  border-radius: 1rem;
  transition: background-color 0.15s;
  min-width: 1.5rem;

  &::after,
  &::before {
    ${icon}
  }

  &:after {
    transform: translateY(0.5rem);
  }

  ${({ $openLessonsTimeline }) =>
    $openLessonsTimeline &&
    css`
      background-color: transparent;

      &::before,
      &::after {
        transform: translateY(0);
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    `}
`
