import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  return { clickedUser: state.clickedUser };
}

class ConnectedProfileRyderDetails extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log('PROFILE RYDER DET this props clickeduser', this.props.clickedUser)
    let cUser = this.props.clickedUser
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Ryder</h4>
            <ReviewUser key='1' clickedUserId={cUser._id} userType='ryder' inputName='ryder-review' />
            <p>Rating goes here: {cUser.ryderRatings.length > 0 ? cUser.ryderRatings : 'no ratings yet'}</p>
            <p>Number of rydes: {cUser.trips.length > 0 ? cUser.trips : 'no trips yet'}</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileRyderDetails = connect(mapStateToProps)(ConnectedProfileRyderDetails);

export default ProfileRyderDetails;
