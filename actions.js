import jsonpP from 'jsonp-p';

import * as types from './constants/ActionTypes';

// Action createor
export function increment() {
  return { type: types.INCREMENT };
}

export function incrementL() {
  return dispatch => {
    return jsonpP('http://www.mocky.io/v2/561f339d110000d8159aca24')
      .then(res => {
        if (res.message === 'HiiiiiiHaaaaa') {
          dispatch(increment10());
        }
      });
  };
}

export function increment10() {
  return { type: types.INCREMENT_L };
}

export function incrementBy(number) {
  return { type: types.INCREMENT_BY, number };
}

export function decrement() {
  return { type: types.DECREMENT };
}

export function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function incrementByAsync(random) {
  return dispatch => {
    setTimeout(() => {
      dispatch(incrementBy(random));
    }, 1000);
  };
}
