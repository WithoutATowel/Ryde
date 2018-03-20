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
          <ul id="discover-slide-out" className="side-nav fixed hide-on-large-only">
            <BigSearch />
          </ul>
          <div className="discover-nav-btn-cont">
            <a href="#" data-activates="discover-slide-out" className="discover-sidnav hide-on-large-only">
              <i className="material-icons">filter_list</i>
              Filter Results
            </a>
          </div>
          <div className='col s12 m4 hide-on-med-and-down'>
            <h1 className='discover-h1'>Find a Ryde</h1>
            <BigSearch />
          </div>
          <div className='list-box-div col s12 m12 l8'>
            <h1>Search Results</h1>
            <ListBox />
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default Discover;
