import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { clickedUser: state.clickedUser };
}

class ConnectedProfileRyderDetails extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    let cUser = this.props.clickedUser
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Ryder</h4>
            <p>Rating goes here: ####</p>
            <p>Number of rydes: {cUser.trips}</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileRyderDetails = connect(mapStateToProps)(ConnectedProfileRyderDetails);

export default ProfileRyderDetails;
