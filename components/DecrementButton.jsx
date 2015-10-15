import React, { Component } from 'react';

export default class DecrementButton extends Component {
  render() {
    return (
      <button onClick={this.props.decrement}>Decrement</button>
    );
  }
}
