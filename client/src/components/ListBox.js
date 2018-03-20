import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';
import { connect } from 'react-redux';
import store from '../redux/store/index';

const mapStateToProps = state => {
  return { rydes: state.searchResults }
}

class ConnectedListBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let rydes = this.props.rydes.map((item, index) => {
      return <ListCard ryde={item} key={index} />
    });

    return (
      <div className='list-box-div col s12 m8'>
        <h1>Search Results</h1>

        {rydes}
      </div>
    )
  }
}

const ListBox = connect(mapStateToProps)(ConnectedListBox);

export default ListBox;
