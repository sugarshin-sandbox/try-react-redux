import React, { Component } from 'react';

export default class IncrementButton extends Component {
  render() {
    return (
      <button onClick={this.props.increment}>Increment</button>
    );
  }
}
