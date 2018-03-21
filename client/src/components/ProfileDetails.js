import React from 'react';
import '../css/profiledetails.css';
import ProfileRyderDetails from '../components/ProfileRyderDetails';
import ProfileDryverDetails from '../components/ProfileDryverDetails';


export const ProfileDetails = props => {

  return (
    <div className='row profile-details-box'>
      <div className='col s10 l5 offset-l1'>
        <ProfileRyderDetails />
      </div>
      <div className='col s10 l5'>
        <ProfileDryverDetails />
      </div>
    </div>
  )
}
