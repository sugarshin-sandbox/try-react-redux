export default function counter(state, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'INCREMENT_L':
    return state + 10;
  case 'INCREMENT_BY':
    return state + action.number;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}
