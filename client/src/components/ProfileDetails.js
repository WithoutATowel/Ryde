import React, { Component } from 'react';
import '../css/profiledetails.css';
import ProfileRyderDetails from '../components/ProfileRyderDetails';
import ProfileDryverDetails from '../components/ProfileDryverDetails';


class ProfileDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='row profile-details-box'>
        <div className='col s10 l5 offset-l1'>
          <ProfileRyderDetails user={this.props.user} />
        </div>
        <div className='col s10 l5'>
          <ProfileDryverDetails user={this.props.user} />
        </div>
      </div>
    )
  }
}

export default ProfileDetails;
