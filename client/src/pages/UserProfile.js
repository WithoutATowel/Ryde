import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../redux/store/index';
import { PrivateProfile } from './PrivateProfile';
import PublicProfile from './PublicProfile';
import axios from 'axios';


const mapStateToProps = state => {
  return { user: state.user };
}

class ConnectedUserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    axios.get('/finduser/' + this.props.match.params.id)
      .then( result => {
        this.setState({
          user: result.data
        })
        console.log(this.props.user)
    }).catch( err => console.log(err.message))
  }

  render() {
    if (this.props.user) {
      if (this.props.user._id === this.props.match.params.id) {
        return <PrivateProfile user={this.props.user} />
      } else {
        return <PublicProfile user={this.state.user} />
      }
    } else {
      return <PublicProfile user={this.state.user} />
    }
  }
}

const UserProfile = connect(mapStateToProps)(ConnectedUserProfile);

export default UserProfile;
