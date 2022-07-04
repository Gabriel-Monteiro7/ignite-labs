import { render as rtlRender } from '@testing-library/react'
import GlobalStyles from '~/styles/global'
import { Theme } from '~/theme'

export * from '@testing-library/react'

const render = (ui: any, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }: { children: JSX.Element }) => {
    return (
      <Theme>
        <>
          <GlobalStyles />
          {children}
        </>
      </Theme>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export { render }
