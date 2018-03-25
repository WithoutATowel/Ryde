import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/userprofile.css';
import { Modal, Button} from 'react-materialize';
import MyRydes from './MyRydes.js'
import UpdateProfile from '../components/UpdateProfile';
import BecomeADryver from '../components/BecomeADryver';
import NoLongerDryve from '../components/NoLongerDryve';
import DeleteUser from '../components/DeleteUser';

class PrivateProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let user = this.props.user
    let ryderRating = user.ryderRatingAvg
    let dryverRating = user.dryverRatingAvg
    let dryverOptions = user.dryver ? <NoLongerDryve userId={user._id} /> : <BecomeADryver userId={user._id} />;
    let dryverSignupText = user.dryver ? 'Currently enrolled to dryve:' : 'Become a Dryver:';
    if (user) {
      return (
        <div id="private-profile" className="container">
          <Modal header='Update Profile' id="update-profile-modal" >
            <UpdateProfile userId={user._id} />
          </Modal>
        {/* scott-feature
          <h1 className='user-profile-h1'>{user.name}'s Profile Page</h1>
          <div className='row'>
            <div className='col s12 center-align'>
              {/* <div className='profile-backing-off-white center-align'></div> */}
              <div className='pic-circle'>
*/}
        {/*
      
          {/* <Modal header='Delete Yourself!' id='deleteuser-modal'>
            <DeleteUser />
          </Modal> */}
          <h2 className='user-profile-h1'>{user.name}'s Profile</h2>
          <div className='row profile-card'>
            <div className='col m4'>
              <div className='pic-circle center-align'>
master  */}
        
        
                <img src='https://www.placecage.com/c/185/230' alt='profile' />
              </div>
            </div>
              <div className='profile-stats-column col m4'>
                <h4>Ryder Stats</h4>
                <ul>
                  <li><span className='bold'>Rating:</span> {ryderRating > 0 ? ryderRating : 'no ratings yet'}</li>
                  <li><span className='bold'>Total Trips:</span> {user.completedTrips.length > 0 ? user.completedTrips : 'no trips yet'}</li>
                </ul>
              </div>
              <div className='profile-stats-column col m4'>
                <h4>Dryver Stats</h4>
                <ul>
                  <li><span className='bold'>Dryver Rating:</span> {dryverRating > 0 ? dryverRating : 'no ratings yet'}</li>
                  <li><span className='bold'>Total Dryves:</span> {user.completedDryves.length > 0 ? user.completedDryves : 'no trips yet'}</li>
                </ul>
              </div>
          </div>
          <h3>Details</h3>
          <div className='row profile-card'>
            <UpdateProfile />
          </div>
          <h3>Dryver Settings</h3>
          <div className='row profile-card'>
            <div>
              <h5>{dryverSignupText}</h5>
              {dryverOptions}
              <br />
              <div>
                <Modal header='Delete Yourself!' trigger={<Button>Delete</Button>}>
                	<DeleteUser />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <h4>Loading...</h4>  /////////// FIX THIS
      )
    }
  }
}

export default PrivateProfile;
