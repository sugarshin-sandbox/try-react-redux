import React, { Component } from 'react';

function getRandomInt(max) {
  return Math.random() * max | 0;
}

export default class IncrementByAsyncButton extends Component {
  render() {
    return (
      <button onClick={() => this.props.fetchJSONP()}>fetchJSONP</button>
    );
  }
}
