import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';

class ListBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='list-box-div col s12 m8'>
        <h3>Matching Rydes</h3>
        <ListCard />
      </div>
    )
  }
}

export default ListBox;
