import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloContextProvider} from "./ApolloContext"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { gql } from '@apollo/client'

import ParentSize from '@visx/responsive/lib/components/ParentSize';
import App from './App.js'


const client = new ApolloClient({
  uri: 'https://fakerql.stephix.uk/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloContextProvider>
      <App />
    </ApolloContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
