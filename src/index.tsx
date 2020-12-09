import React , { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  

import { createStore , applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './store/reducers'
import reduxThunk from 'redux-thunk'

import { ApolloClient , InMemoryCache , ApolloProvider, createHttpLink } from  '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { ENTRYPOINT } from './config'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import App from './App'

import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const store = createStore(Reducers,{},applyMiddleware(reduxThunk))

const stripePromise = loadStripe('pk_test_51HOnftCwN6PYafv7IMbas7yZfJeDfbVPLeOg4Qfv7jbaqI3guZWEhIEbpgkug9uqfnrDFS86rdkpY7Xo3ITeFStD000KnZ4HZQ')

const httpLink = createHttpLink({
  uri: ENTRYPOINT,
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ApolloProvider client={Client} >
          <Elements stripe={stripePromise} >
            <App />
          </Elements>
        </ApolloProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('App')
)
