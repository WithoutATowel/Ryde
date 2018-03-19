import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';

class ListBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='list-box-div'>
        <h2 className='list-box-h2'>~~~~~~~~~~~~~LIST BOX PLACEHOLDER component</h2>
        <ListCard />
        <br />
      </div>
    )
  }
}

export default ListBox;
