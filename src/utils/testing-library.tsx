import { render as rtlRender } from '@testing-library/react'
import GlobalStyles from '~/styles/globalStyles'
import { Theme } from '~/theme'

export * from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'

const render = (ui: any, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: JSX.Element }) => {
    return (
      <Theme>
        <Router>
          <GlobalStyles />
          {children}
        </Router>
      </Theme>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

const renderSpyOn = (library: any, functionSpyOn: string, mockReturn: any) => {
  return jest.spyOn(library, functionSpyOn).mockReturnValue(mockReturn)
}

export { render, renderSpyOn }
