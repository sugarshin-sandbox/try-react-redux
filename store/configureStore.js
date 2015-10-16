import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import persistState from 'redux-localstorage';

import reducer from '../reducers/counter';

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, require('redux-logger')()];
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  persistState()
)(createStore);// applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
