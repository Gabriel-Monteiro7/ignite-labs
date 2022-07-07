import Page from '~/pages/Event'
import { Provider } from '~/context'
import GlobalStyles from './styles/globalStyles'
import { Theme } from './theme'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client'

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Theme>
          <>
            <GlobalStyles />
            <Page />
          </>
        </Theme>
      </Provider>
    </ApolloProvider>
  )
}

export default App
