import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import counter from '../reducers/counter';

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore);

  return createStoreWithMiddleware(counter, initialState);
}
