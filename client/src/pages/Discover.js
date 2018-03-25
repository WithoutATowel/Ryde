import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liftCurrentPageToState } from '../redux/actions/index';
import '../css/discover.css';
import ListBox from '../components/ListBox';
import BigSearch from '../components/BigSearch';

const mapDispatchToProps = dispatch => {
  return {
    liftCurrentPageToState: page => dispatch(liftCurrentPageToState(page))
  }
}

class ConnectedDiscover extends Component {

  componentDidMount() {
    this.props.liftCurrentPageToState('/discover')

    var oldJs = document.getElementById('discover-js');
    if (oldJs) {
      oldJs.parentElement.removeChild(oldJs);
    }

    const script = document.createElement("script");
    script.id = 'discover-js';
    script.src = "/js/discover.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className='discover-div'>
        <div className='row'>
          <ul id="discover-slide-out" className="side-nav fixed hide-on-large-only">
            <BigSearch />
          </ul>
          <div className="discover-nav-btn-cont">
            <a href="#d-slide-out" data-activates="discover-slide-out" className="discover-sidnav hide-on-large-only">
              <i className="material-icons">filter_list</i>
              Filter Results
            </a>
          </div>
          <div className='col s12 l3 hide-on-med-and-down discover-side-column'>
            <h2 className='discover-h1'>Find a Ryde</h2>
            <BigSearch />
          </div>
          <div className='list-box-div col s12 m12 l9'>
            <h2 id='search-results-header'>Search Results</h2>
              <div id='search-results-box'>
                <ListBox />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const Discover = connect(null, mapDispatchToProps)(ConnectedDiscover);

export default Discover;
