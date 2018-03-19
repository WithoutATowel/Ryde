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
        <div className='col s12 m7'>
          <h1>~~~~~~~~ ListBox ~~~~~~~~~</h1>
          <ListCard />
        </div>
        <br />
      </div>
    )
  }
}

export default ListBox;
