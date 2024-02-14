import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/styles/styles.css' 
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider >

  </React.StrictMode>,
)
