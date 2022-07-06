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
}
`
export default GlobalStyles
