import { ApolloProvider } from '@apollo/client'
import { client } from './config/apollo-client'

import '~/utils/yupLocale'

import { Provider } from '~/context'

import Router from './routes'

import { Theme } from './theme'
import GlobalStyles from './styles/globalStyles'

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Theme>
          <>
            <GlobalStyles />
            <Router />
          </>
        </Theme>
      </Provider>
    </ApolloProvider>
  )
}

export default App
