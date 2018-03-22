import React, { Component } from 'react';
import '../css/listbox.css';
import ListCard from './ListCard';
import { connect } from 'react-redux';
// import store from '../redux/store/index';

const mapStateToProps = state => {
  return {
    searchResults: state.searchResults,
    myRydesDryves: state.myRydesDryves,
    rydesTabIsToggled: state.rydesTabIsToggled,
    user: state.user
  }
}

class ConnectedListBox extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    let rydes, confirmedRydesHeader, pendingRydesHeader, confirmedRydes, pendingRydes;
    let myRydesDryvesLength = this.props.myRydesDryves ? this.props.myRydesDryves.length : 0;
    let searchResultsLength = this.props.searchResults ? this.props.searchResults.length : 0;
    if (myRydesDryvesLength > 0 || searchResultsLength > 0) {
      if (this.props.myRydesPage && this.props.rydesTabIsToggled) {
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
      } else if (this.props.myRydesPage && !this.props.rydesTabIsToggled) {
        rydes = this.props.myRydesDryves.map((trip, index) => {
          return <ListCard ryde={trip} key={index} myRydesPage={this.props.myRydesPage} dryvesTab={true} />
        });
      } else {
        rydes = this.props.searchResults.map((trip, index) => {
          return <ListCard ryde={trip} key={index} />
        });
      }
    } else {
      rydes = ( <h5>No Rydes found.</h5> );
    }
    const relativeOnMyRydes = this.props.myRydesPage ? 'position-relative container' : ''
    return (
      <div id='list-box-outer-div' className={relativeOnMyRydes}>
        {rydes}
      </div>
    )
  }
}

const ListBox = connect(mapStateToProps)(ConnectedListBox);

export default ListBox;
