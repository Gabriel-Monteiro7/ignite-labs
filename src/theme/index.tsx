import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { ThemeState, Types, useContext } from '~/context'
import { FC, useEffect } from 'react'
import { LocalStorageService } from '~/services/LocalStorage'
import { getTheme } from '~/utils'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      type: string
      primary: string
      secondary: string
      background: {
        paper: string
        default: string
      }
      text: { primary: string; secondary: string }
      divider: string
      dividerDark: string
    }
  }
}

const light = {
  palette: {
    type: 'light',
    primary: '#F92F4A',
    secondary: '#160E4C',
    background: {
      paper: '#ffffff',
      default: '#eff1f5'
    },
    text: { primary: '#000000dd', secondary: '#00000099' },
    divider: 'rgba(0,0,0,0.07)',
    dividerDark: 'rgba(0,0,0,0.15)'
  }
}

const dark = {
  palette: {
    type: 'dark',
    primary: '#fa586e',
    secondary: '#443e6f',
    background: {
      paper: '#2C2C2E',
      default: '#1C1C1E'
    },
    text: { primary: '#ffffff', secondary: '#ffffffb2' },
    divider: 'rgba(255,255,255,0.07)',
    dividerDark: 'rgba(255,255,255,0.15)'
  }
}

const themes = { light, dark }

const ThemeDefault: FC<{ children: JSX.Element }> = ({ children }) => {
  const { state } = useContext()
  const theme = state?.theme

  const defaultTheme = themes[theme]

  return (
    <ThemeProviderStyled theme={defaultTheme}>{children}</ThemeProviderStyled>
  )
}

export const Theme: FC<{ children: JSX.Element }> = ({ children }) => {
  const { dispatch } = useContext()

  useEffect(() => {
    const theme = getTheme()

    dispatch({
      type: Types.changeTheme,
      theme
    })

    const classList = document.documentElement.classList

    if (theme === 'dark') classList.add('dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <ThemeDefault>{children}</ThemeDefault>
}
