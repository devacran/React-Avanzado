// Importamos React
import React from 'react'
import ReactDOM from 'react-dom'
// Esto es para el graphQL
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
// Esto es para el context
import Context from './Context'

import { App } from './app'
// Este client es el que vamos a usar con el apolo provider

const client = new ApolloClient({
  uri: 'https://petgram-server-devacran.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

// El context.provider es el que proporciona los datos
ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
