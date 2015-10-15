import jsonpP from 'jsonp-p';

// Action createor
export function increment() {
  return { type: 'INCREMENT' };
}

export function incrementL() {
  return dispatch => {
    return jsonpP('http://www.mocky.io/v2/561f339d110000d8159aca24')
      .then(res => {
        console.log(res);
        {message: "HiiiiiiHaaaaa"}
        if (res.message === 'HiiiiiiHaaaaa') {
          dispatch(increment10());
        }
      });
  };
}

export function increment10() {
  return { type: 'INCREMENT_L' };
}

export function incrementBy(number) {
  return { type: 'INCREMENT_BY', number };
}

export function decrement() {
  return { type: 'DECREMENT' };
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
