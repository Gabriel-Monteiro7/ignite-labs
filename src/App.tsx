import Page from '~/pages/Home'
import { StoreProvider } from '~/context'
import GlobalStyles from './styles/globalStyles'
import { Theme } from './theme'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client'

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Theme>
          <>
            <GlobalStyles />
            <Page />
          </>
        </Theme>
      </StoreProvider>
    </ApolloProvider>
  )
}

export default App
