import React from 'react';
import '../css/userprofile.css';

export const PrivateProfile = props => {
  return (
    <div>
      <h1 className='user-profile-h1'>{props.user.name}'s Profile Page</h1>
      {console.log('here is the user', props.user)}
    </div>
  )
}
