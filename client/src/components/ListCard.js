import React, { Component } from 'react';
import '../css/listcard.css';
import Ryders from './Ryders';

class ListCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='list-card-div'>
        <h3 className='list-card-h3'>~~~~~~~~~LIST CARD PLACEHOLDER component~~~~~~~~~</h3>
        <Ryders />
        <br />
      </div>
    )
  }
}

export default ListCard;
