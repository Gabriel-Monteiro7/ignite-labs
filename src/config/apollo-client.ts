import { ApolloClient, InMemoryCache } from '@apollo/client'

const API_URL = import.meta.env.VITE_API_URL_GRAPHCMS
const ACCESS_TOKEN_GRAPHCMS = import.meta.env.VITE_ACCESS_TOKEN_GRAPHCMS

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: 'Bearer ' + ACCESS_TOKEN_GRAPHCMS
  },
  cache: new InMemoryCache()
})
