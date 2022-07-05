import { createGlobalStyle } from 'styled-components'
import './global.css'

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-smooth:antialiased ;
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
}
`
export default GlobalStyles
