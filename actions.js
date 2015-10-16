import jsonpP from 'jsonp-p';

import * as types from './constants/ActionTypes';

// Action createor
export function increment() {
  return { type: types.INCREMENT };
}

function requestJSONP() {
  return {
    type: types.REQUEST_JSONP
  }
}

// function successJSONP() {
//   return {
//     type: types.SUCCESS_JSONP
//   }
// }

function failureJSONP(error) {
  return {
    type: types.FAILURE_JSONP,
    error
  }
}

export function fetchJSONP() {
  return dispatch => {
    return jsonpP('http://www.mocky.io/v2/5620fa26120000d4340113b4')
      .then(json => dispatch(incrementBy(json.count)))
      .catch(err => dispatch(failureJSONP(err)));
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
