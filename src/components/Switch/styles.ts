import styled from 'styled-components'

const range = 50

const dotDimension = 25

const translateRange = range - dotDimension

export const Container = styled.div``

export const Button = styled.label.attrs({ for: 'toggle' })`
  display: inline-block;
  width: ${range}px;
  height: 20px;
  background-color: ${({ theme }) => theme.palette.primary + 90};
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  opacity: 0.6;

  &::after {
    content: '';
    width: ${dotDimension}px;
    height: ${dotDimension}px;
    background-color: ${({ theme }) => theme.palette.primary};

    border-radius: 50%;
    box-shadow: 0 0 5px #00000040;
    position: absolute;
    top: -3px;
    left: 0;
    display: grid;
    place-content: center;
    line-height: 0;
    transition: background-color 1s ease-in-out, transform 1s ease;
  }
`

export const Toggle = styled.input.attrs({ type: 'checkbox', id: 'toggle' })`
  display: none;

  &:checked + ${Button}::after {
    content: '';
    transform: translateX(${translateRange}px) rotate(360deg);
  }
  &:checked + ${Button} {
    opacity: 1;
  }
`
