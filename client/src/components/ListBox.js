import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';
import { connect } from 'react-redux';
// import store from '../redux/store/index';

const mapStateToProps = state => {
  return { 
    searchResults: state.searchResults,
    myRydesDryves: state.myRydesDryves,
    user: state.user
  }
}

class ConnectedListBox extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log(this.props.myRydesDryves);
    let rydes, confirmedRydesHeader, pendingRydesHeader, confirmedRydes, pendingRydes; 
    if (this.props.myRydesPage) {
      confirmedRydes = this.props.myRydesDryves.map((trip, index) => {
        if (trip.ridersId.includes(this.props.user._id)) {
          confirmedRydesHeader = true;
          return <ListCard ryde={trip} key={index} myRydesPage={this.props.myRydesPage} />
        }
      });
      confirmedRydesHeader = confirmedRydesHeader ? (<h3>Confirmed Rydes</h3>) : '';
      pendingRydes = this.props.myRydesDryves.map((trip, index) => {
        if (trip.pendingRiders.includes(this.props.user._id)) {
          pendingRydesHeader = true;
          return <ListCard ryde={trip} key={index} myRydesPage={this.props.myRydesPage} />
        }
      });
      pendingRydesHeader = pendingRydesHeader ? (<h3>Pending Rydes</h3>) : '';
      rydes = (
        <div>
          {confirmedRydesHeader} 
          {confirmedRydes} 
          {pendingRydesHeader} 
          {pendingRydes}
        </div>
      );
    } else {
      rydes = this.props.searchResults.map((trip, index) => {
        return <ListCard ryde={trip} key={index} myRydesPage={this.props.myRydesPage} />
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
