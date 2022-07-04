import React from 'react'

import Button from '.'

import { render, screen } from '~/utils/testing-library'

describe('<Button/>', () => {
  const { findByRole } = screen
  it('Render the button title', async () => {
    render(<Button text="Teste" />)
    await findByRole('button', { name: 'Teste' })
  })
})
