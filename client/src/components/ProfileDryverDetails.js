import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  return { theUser: state.user, clickedUser: state.clickedUser };
}

class ConnectedProfileDryverDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedUser: this.props.clickedUser,
      theUser: this.props.user,
      showReviewUser: !this.props.theUser.reviewedDryvers.includes(this.props.clickedUser._id) ? true : false
    }
    this.handleUpdateProfileDryverDetails = this.handleUpdateProfileDryverDetails.bind(this)
  }

  handleUpdateProfileDryverDetails(users) {
    this.setState({
      clickedUser: users.clickedUser,
      theUser: users.theUser,
      showReviewUser: false
    })
  }

  render() {
    let displayReviewUser = null;
    let ratingAvg = this.state.clickedUser.dryverRatingAvg
    let cUser = this.props.clickedUser
    if (this.props.theUser && this.state.showReviewUser) {
      displayReviewUser = (
        <ReviewUser
          key='2'
          clickedUserId={cUser._id}
          userType='dryver'
          inputName='dryver-review'
          theUser={this.props.theUser}
          updateProfileDryverDetails={this.handleUpdateProfileDryverDetails}
        />
      )
    } else {
      displayReviewUser = null
    }
    return (
      <div className='row'>
        <div className='col s12 center-align'>
          <div className='ryder-dryver-details-wrapper'>
            <h4>Dryver</h4>
            {displayReviewUser}
            <p>~~~REMOVE LATER~~~Ratings goes here: {cUser.dryverRatings.length > 0 ? cUser.dryverRatings : 'no ratings yet'}</p>
            <p>{cUser.name}'s Dryver rating: {ratingAvg > 0 ? ratingAvg : 'no ratings yet'}</p>
            <p>{cUser.name}'s car: {cUser.car}</p>
            <p>~~~~~~~FIGURE OUT HOW TO LIST REVIEWS/COMMENTS HERE~~~~~~~~</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileDryverDetails = connect(mapStateToProps)(ConnectedProfileDryverDetails);

export default ProfileDryverDetails;
