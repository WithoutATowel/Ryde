import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  return { theUser: state.user, clickedUser: state.clickedUser };
}

class ConnectedProfileRyderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedUser: this.props.clickedUser,
      theUser: this.props.user,
      showReviewUser: !this.props.theUser.reviewedRyders.includes(this.props.clickedUser._id) ? true : false
    }
    this.handleUpdateProfileRyderDetails = this.handleUpdateProfileRyderDetails.bind(this)
  }

  handleUpdateProfileRyderDetails(users) {
    this.setState({
      clickedUser: users.clickedUser,
      theUser: users.theUser,
      showReviewUser: false
    })
  }

  render() {
    let displayReviewUser = null;
    let ratingAvg = this.state.clickedUser.ryderRatingAvg
    let cUser = this.props.clickedUser
    if (this.props.theUser && this.state.showReviewUser) {
      displayReviewUser = (
        <ReviewUser
          key='1'
          clickedUserId={cUser._id}
          userType='ryder'
          inputName='ryder-review'
          theUser={this.props.theUser}
          updateProfileRyderDetails={this.handleUpdateProfileRyderDetails}
        />
      )
    } else {
      displayReviewUser = null
    }
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Ryder</h4>
            {displayReviewUser}
            <p>~~~REMOVE LATER~~~Ratings goes here: {cUser.ryderRatings.length > 0 ? cUser.ryderRatings : 'no ratings yet'}</p>
            <p>{cUser.name}'s Ryder rating: {ratingAvg > 0 ? ratingAvg : 'no ratings yet'}</p>
            <p>{cUser.name}'s total rydes: {cUser.completedTrips.length > 0 ? cUser.completedTrips : 'no trips yet'}</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileRyderDetails = connect(mapStateToProps)(ConnectedProfileRyderDetails);

export default ProfileRyderDetails;
