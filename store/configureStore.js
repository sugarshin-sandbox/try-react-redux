import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers/counter';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, require('redux-logger')()];
}

const finalCreateStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
