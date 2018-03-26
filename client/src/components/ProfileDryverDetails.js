import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import ReviewUser from './ReviewUser';

const mapStateToProps = state => {
  // return { theUser: state.user, clickedUser: state.clickedUser };
  return { theUser: state.user };
}

class ConnectedProfileDryverDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedUser: this.props.clickedUser,
      showReviewUser: this.props.theUser ? (!this.props.theUser.reviewedDryvers.includes(this.props.clickedUser._id) ? true : false) : false
    }
    this.handleUpdateProfileDryverDetails = this.handleUpdateProfileDryverDetails.bind(this)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  notifyUpdate = (msg) => toast.info(msg, {position: toast.POSITION.TOP_CENTER});

  handleUpdateProfileDryverDetails(users) {
    this.setState({
      clickedUser: users.clickedUser,
      showReviewUser: false
    })
  }

  render() {
    console.log('from profileDruyverDetails',this.props.theUser)
    console.log('clicked user from profileDryverDetails', this.state.clickedUser)
    let displayReviewUser = null;
    let ratingAvg = this.state.clickedUser.dryverRatingAvg
    let cUser = this.state.clickedUser
    let cUserName = cUser.name.match(/\S+/)
    if (this.props.theUser && (this.state.showReviewUser || (!this.props.theUser.reviewedDryvers.includes(this.state.clickedUser._id) ? true : false))) {
      displayReviewUser = (
        <ReviewUser
          key='2'
          clickedUserId={cUser._id}
          userType='dryver'
          inputName='dryver-review'
          theUser={this.props.theUser}
          notifyUpdate={this.notifyUpdate}
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
            <p>{cUserName}'s Dryver rating: {ratingAvg > 0 ? ratingAvg : 'no ratings yet'}</p>
            <p>{cUserName}'s total Dryes: {cUser.completedDryves.length > 0 ? cUser.completedDryves : 'no trips yet'}</p>
            <p>{cUserName}'s car: {cUser.car}</p>
          </div>
        </div>
      </div>
    )
  }
}

const ProfileDryverDetails = connect(mapStateToProps)(ConnectedProfileDryverDetails);

export default ProfileDryverDetails;
