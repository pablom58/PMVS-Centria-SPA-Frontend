import React , { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './store/reducers'

import { ApolloClient , InMemoryCache , ApolloProvider } from  '@apollo/client'
import { ENTRYPOINT } from './config'

import App from './App'

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const store = createStore(Reducers,{})

const Client = new ApolloClient({
  uri: ENTRYPOINT,
  cache: new InMemoryCache()
})

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={Client} >
          <App />
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('App')
)
