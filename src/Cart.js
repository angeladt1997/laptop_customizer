  
import React, { Component } from 'react';

import UpdateCart from '/UpdateCart';
import Total from '/Total';

export default class Cart extends Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Summary 
          selected={this.props.selected}
        />
        <Total 
          selected={this.props.selected}
        />
      </section>
    )
  }
}
