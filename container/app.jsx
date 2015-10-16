import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IncrementButton from '../components/IncrementButton';
import DecrementButton from '../components/DecrementButton';
import IncrementAsyncButton from '../components/IncrementAsyncButton';
import IncrementByAsyncButton from '../components/IncrementByAsyncButton';
import * as actions from '../actions';

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  render() {
    const { actions, count } = this.props;

    return (
      <div className="app">
        <IncrementButton actions={actions} />
        <DecrementButton {...actions} />
        <IncrementAsyncButton {...actions} />
        <IncrementByAsyncButton {...actions} />
        <span>{count}</span>
      </div>
    );
  }
}
