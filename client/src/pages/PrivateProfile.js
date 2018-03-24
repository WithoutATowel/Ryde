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
    let dryverSignupText = user.dryver ? 'No longer want to dryve?' : 'Become a Dryver';
    if (user) {
      return (
        <div id="private-profile" className="container">
          <Modal header='Update Profile' id="update-profile-modal" >
            <UpdateProfile userId={user._id} />
          </Modal>
          {/* <Modal header='Delete Yourself!' id='deleteuser-modal'>
            <DeleteUser />
          </Modal> */}
          <h2 className='user-profile-h1'>{user.name}'s Profile Page</h2>
          <div className='row profile-ratings-summary'>
            <div className='col m4'>
              <div className='pic-circle center-align'>
                <img src='https://www.placecage.com/c/185/230' alt='profile' />
              </div>
            </div>
            {/*<a href='#update-profile-modal' className="modal-trigger ">Update profile</a> */}
              <div className='profile-stats-column col m4'>
                <h5>Ryder Stats</h5>
                <ul>
                  <li>Rating: {ryderRating > 0 ? ryderRating : 'no ratings yet'}</li>
                  <li>Total Trips: {user.completedTrips.length > 0 ? user.completedTrips : 'no trips yet'}</li>
                </ul>
              </div>
              <div className='profile-stats-column col m4'>
                <h5>Dryver Stats</h5>
                <ul>
                  <li>Dryver Rating: {dryverRating > 0 ? dryverRating : 'no ratings yet'}</li>
                  <li>Total Dryves: {user.completedDryves.length > 0 ? user.completedDryves : 'no trips yet'}</li>
                </ul>
              </div>
          </div>
              <h5>{dryverSignupText}</h5>
              {dryverOptions}
             {/* 
              <br />

              <div>
                <Modal
                	header='Delete Yourself!'
                  trigger={<Button>Delete</Button>}>
                	<DeleteUser />
                </Modal>
              </div>
              */}
          
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
