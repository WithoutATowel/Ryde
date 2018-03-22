import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  return { clickedUser: state.clickedUser };
}

class ConnectedProfileDryverDetails extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.log('PROFILE DRYVER DET this props clickeduser', this.props.clickedUser)
    let cUser = this.props.clickedUser
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Dryver</h4>
            <ReviewUser key='2' clickedUserId={cUser._id} userType='dryver' inputName='dryver-review' />
            <p>Rating goes here: {cUser.dryverRatings.length > 0 ? cUser.dryverRatings : 'no ratings yet'}</p>
            <p>Type of car goes here: @@@@</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileDryverDetails = connect(mapStateToProps)(ConnectedProfileDryverDetails);

export default ProfileDryverDetails;
