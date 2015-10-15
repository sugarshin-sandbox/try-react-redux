import * as types from '../constants/ActionTypes';

export default function counter(state, action) {
  switch (action.type) {
  case types.INCREMENT:
    return state + 1;
  case types.INCREMENT_L:
    return state + 10;
  case types.INCREMENT_BY:
    return state + action.number;
  case types.DECREMENT:
    return state - 1;
  default:
    return state;
  }
}
