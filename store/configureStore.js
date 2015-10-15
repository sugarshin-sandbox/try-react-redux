import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import counter from '../reducers/counter';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  middlewares = [...middlewares, createLogger()];
}

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

  return createStoreWithMiddleware(counter, initialState);
}
