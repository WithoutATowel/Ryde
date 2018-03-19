import React, { Component } from 'react';
import '../css/discover.css';
import ListBox from '../components/ListBox';
import BigSearch from '../components/BigSearch';

class Discover extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='discover-div'>
        <h1 className='discover-h1'>Find a Ryde</h1>
        <div className='row'>
          <BigSearch />
          <ListBox />
        </div>
        <br />
      </div>
    )
  }
}

export default Discover;
