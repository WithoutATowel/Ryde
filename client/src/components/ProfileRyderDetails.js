import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  // return { theUser: state.user, clickedUser: state.clickedUser };
  return { theUser: state.user };
}

class ConnectedProfileRyderDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedUser: this.props.clickedUser,
      showReviewUser: this.props.theUser ? (!this.props.theUser.reviewedRyders.includes(this.props.clickedUser._id) ? true : false) : false
    }
    this.handleUpdateProfileRyderDetails = this.handleUpdateProfileRyderDetails.bind(this)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  notifyUpdate = (msg) => toast.info(msg, {position: toast.POSITION.TOP_CENTER});

  handleUpdateProfileRyderDetails(users) {
    this.setState({
      clickedUser: users.clickedUser,
      showReviewUser: false
    })
  }

  render() {
    console.log('from profileRyderDetails',this.props.theUser)
    let displayReviewUser = null;
    let ratingAvg = this.state.clickedUser.ryderRatingAvg
    let cUser = this.state.clickedUser
    let cUserName = cUser.name.match(/\S+/)
    if (this.props.theUser && (this.state.showReviewUser || (!this.props.theUser.reviewedRyders.includes(this.state.clickedUser._id) ? true : false))) {
      displayReviewUser = (
        <ReviewUser
          key='1'
          clickedUserId={cUser._id}
          userType='ryder'
          inputName='ryder-review'
          theUser={this.props.theUser}
          notifyUpdate={this.notifyUpdate}
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
            <p>{cUserName}'s Ryder rating: {ratingAvg > 0 ? ratingAvg : 'no ratings yet'}</p>
            <p>{cUserName}'s total rydes: {cUser.completedTrips.length > 0 ? cUser.completedTrips : 'no trips yet'}</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileRyderDetails = connect(mapStateToProps)(ConnectedProfileRyderDetails);

export default ProfileRyderDetails;
