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
      <div className='row'>
        <div className='col s10 l5 offset-l1'>
          <ProfileRyderDetails />
        </div>
        <div className='col s10 l5'>
          <ProfileDryverDetails />
        </div>
      </div>
    )
  }
}

export default ProfileDetails;
