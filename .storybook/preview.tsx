import React from 'react'
import GlobalStyles from '../src/styles/globalStyles'
import { Theme } from '../src/theme'

export const decorators = [
  (Story) => (
    <Theme>
      <>
        <GlobalStyles />
        <Story />
      </>
    </Theme>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#121214'
      }
    ]
  }
}
