import Page from '~/pages/Home'
import { StoreProvider } from '~/context'
import GlobalStyles from './styles/global'
import { Theme } from './theme'

function App() {
  return (
    <StoreProvider>
      <Theme>
        <>
          <GlobalStyles />
          <Page />
        </>
      </Theme>
    </StoreProvider>
  )
}

export default App
