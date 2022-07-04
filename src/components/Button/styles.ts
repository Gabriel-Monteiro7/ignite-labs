import styled, { css } from 'styled-components'

import { Variants } from './'

const text = css`
  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.palette.primary + 15};
    }
  `}
`

const contained = css`
  ${({ theme }) => css`
    background-color: ${theme.palette.primary};
    color: ${theme.palette.text.primary};
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  `}
`

const outlined = css`
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.primary};
    opacity: 0.8;

    &:hover {
      opacity: 1;
      background-color: ${theme.palette.primary + 15};
    }
  `}
`

const variants = {
  text,
  contained,
  outlined
}

export const Container = styled.button<{ variant: Variants }>`
  border: 0;
  padding: 0.8rem 3rem;
  border-radius: 5px;

  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  color: ${({ theme }) => theme.palette.primary};

  ${({ variant }) => variants[variant]}
`
