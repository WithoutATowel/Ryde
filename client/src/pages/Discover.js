import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
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
        <div className='row'>
          <div className='col s12 m4'>
            <h1 className='discover-h1'>Find a Ryde</h1>
            <BigSearch />
          </div>
          <ListBox />
        </div>
        <br />
      </div>
    )
  }
}

export default Discover;
