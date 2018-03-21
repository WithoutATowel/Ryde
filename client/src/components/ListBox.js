import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';
import { connect } from 'react-redux';
// import store from '../redux/store/index';

const mapStateToProps = state => {
  return { 
    searchResults: state.searchResults,
    myRydesDryves: state.myRydesDryves
  }
}

class ConnectedListBox extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(this.props.myRydesDryves);
    let rydes; 
    if (this.props.myRydesPage) {
      rydes = this.props.myRydesDryves.map((item, index) => {
        return <ListCard ryde={item} key={index} myRydesPage={this.props.myRydesPage} />
      });
    } else {
      rydes = this.props.searchResults.map((item, index) => {
        return <ListCard ryde={item} key={index} myRydesPage={this.props.myRydesPage} />
      });
    }

    return (
      <div>
        {rydes}
      </div>
    )
  }
}

const ListBox = connect(mapStateToProps)(ConnectedListBox);

export default ListBox;
