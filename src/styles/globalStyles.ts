import { createGlobalStyle } from 'styled-components'
import './global.css'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing:antialiased;
  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
}
`
export default GlobalStyles
