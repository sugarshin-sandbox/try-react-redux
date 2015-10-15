import React, { Component } from 'react';

export default class IncrementAsyncButton extends Component {
  render() {
    return (
      <button onClick={this.props.incrementAsync}>IncrementAsync</button>
    );
  }
}
