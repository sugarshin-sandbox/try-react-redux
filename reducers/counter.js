import * as types from '../constants/ActionTypes';

export default function counter(state, action) {
  switch (action.type) {
  case types.INCREMENT:
    return Object.assign({}, state, {
      count: state.count + 1
    });
  case types.INCREMENT_L:
    return Object.assign({}, state, {
      count: state.count + 10
    });
  case types.INCREMENT_BY:
    return Object.assign({}, state, {
      count: state.count + action.number
    });
  case types.DECREMENT:
    return Object.assign({}, state, {
      count: state.count - 1
    });
  default:
    return state;
  }
}
