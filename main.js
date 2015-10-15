import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './container/app';
import configureStore from './store/configureStore';

const initialState = 10;
const store = configureStore(initialState);

const rootEl = document.createElement('div');
rootEl.id = 'root';
document.body.appendChild(rootEl);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);

// // Which action creators does it want to receive by props?
// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(increment())
//   };
// }
// @connect(mapStateToProps)
// export default class CounterContainer { ... }
// class App extends Component {
//   render() {
//     <div className="app">
//       <Counter count={}>
//     </div>
//   }
// }
//
// ReactDOM.render((
//   <Provider store={store}>
//     {() => <App />}
//   </Provider>
// ), document.body);
//

// You can subscribe to the updates manually, or use bindings to your view layer.
// store.subscribe(() => {
//   console.log(store.getState());
// });
// //
// const button1 = document.createElement('button');
// button1.addEventListener('click', () => {
//   store.dispatch(increment());
// });
// button1.textContent = 'INCREMENT';
//
// const button2 = document.createElement('button');
// button2.addEventListener('click', () => {
//   store.dispatch(decrement());
// });
// button2.textContent = 'DECREMENT';
//
// const button3 = document.createElement('button');
// button3.addEventListener('click', () => {
//   store.dispatch(incrementAsync());
// });
// button3.textContent = 'ASYNC INCREMENT';
//
// const button4 = document.createElement('button');
// button4.addEventListener('click', () => {
//   store.dispatch(incrementL());
// });
// button4.textContent = 'JSONP';
//
// document.addEventListener('keydown', ev => {
//   // console.log(ev.shiftKey);
//   switch (true) {
//   case ev.shiftKey:
//     store.dispatch(increment());
//     break;
//   case ev.ctrlKey:
//     store.dispatch(decrement());
//     break;
//   case ev.altKey:
//     store.dispatch(incrementAsync());
//     break;
//   default:
//
//   }
// });
// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);
// document.body.appendChild(button4);
//
// // // The only way to mutate the internal state is to dispatch an action.
// // // The actions can be serialized, logged or stored and later replayed.
// // store.dispatch({ type: 'INCREMENT' });
// // // 1
// // store.dispatch({ type: 'INCREMENT' });
// // // 2
// // store.dispatch({ type: 'DECREMENT' });
// // // 1
