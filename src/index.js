import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import _ from 'lodash';

import './index.css';
import App from './App';
import storeConfig from './store';
import registerServiceWorker from './config/registerServiceWorker';

const initialState = Object.assign({}, window.__PRELOADED_STATE__ || {});

/** if state is preset hydrate the app */
const renderMethod = _.isEmpty(initialState) ? 'render' : 'hydrate';
const store = storeConfig(initialState);

ReactDOM[renderMethod](
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
