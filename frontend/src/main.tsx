import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { client } from './lib/apollo'

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
