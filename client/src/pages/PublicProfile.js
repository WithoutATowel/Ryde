import React, { Component } from 'react';
import '../css/publicprofile.css';
import ProfileDetails from '../components/ProfileDetails';
import axios from 'axios';

class PublicProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  // componentDidMount() {
  //   axios.post('/finduser', {
  //     _id: this.props.userId
  //   }).then( result => {
  //     console.log('here is userInfo', result.data)
  //     this.setState({
  //       user: result.data
  //     })
  //   }).catch( err => console.log(err))
  // }

  render() {
    // console.log('userinfo', this.state.user)
    // let userName = null
    // if (this.state.user !== null) {
    //   userName = this.state.user.user.name
    // } else {
    //   userName = 'DIDNT FIND USER'
    // }
    if (this.props.user) {
      return (
        <div className='public-profile-page'>
          <div className='row'>
            <div className='col s12 center-align'>
              <h1 className='public-h1'>~~~~~Working on pub profile~~~~</h1>
              <div className='pic-circle'>
                <img src='https://www.placecage.com/c/185/230' />
              </div>
              <br />
              <h5>~~~~~~{this.props.user.user.name} PLACHOLDER text~~~~~~~~~</h5>
              {console.log(' LALA this.props.user', this.props.user)}
              <p>do we want gender here???</p>
            </div>
          </div>
          <div className='row center-align'>
            <div className='col s10 offset-s1'>
              <ProfileDetails />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <h4>~~~~~~~~~~~~Loading...~~~~~~~~~~</h4> //FIX THIS
      )
    }
  }
}

export default PublicProfile;
