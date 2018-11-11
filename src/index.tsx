// Copyright (c) 2018 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { Router } from './Router';
import { store } from './store/index';

import './index.css';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/graphql'
      : 'https://l94v8vh7rc.execute-api.us-east-1.amazonaws.com/dev/graphql',
});

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
