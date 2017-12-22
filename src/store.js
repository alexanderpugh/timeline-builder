import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const logger = createLogger();

export default function storeConfig(initialState = {}) {
  const middlewares = [
    logger,
    thunk
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    reducers,
    initialState,
    compose(...enhancers)
  );

  store.asyncReducers = {};

  return store;
}
