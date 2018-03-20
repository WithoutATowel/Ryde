import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { PrivateProfile } from './PrivateProfile';
import PublicProfile from './PublicProfile';

const mapStateToProps = state => {
  return { user: state.user };
}

class ConnectedUserProfile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.user) {
      if (this.props.user._id === this.props.match.params.id) {
        return <PrivateProfile />
      } else {
        return <PublicProfile />
      }
    } else {
      return <PublicProfile />
    }
  }
}

const UserProfile = connect(mapStateToProps)(ConnectedUserProfile);

export default UserProfile;
