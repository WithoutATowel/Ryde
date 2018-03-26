import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { liftUpdatedUser } from '../redux/actions/index';
// import store from '../redux/store/index';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return { liftUpdatedUser: user => dispatch(liftUpdatedUser(user)) };
}

class ConnectedNoLongerDryve extends Component {
  constructor(props) {
    super(props)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  notifyUpdate = () => toast.info("You are no longer a Dryver.", {position: toast.POSITION.TOP_CENTER});

  removeDryverStatus(e) {
    e.preventDefault()
    let userId = this.props.userId
    console.log(userId)
    axios.post('/profile/' + userId + '/removedryverstatus', { userId })
      .then( result => {
        this.props.liftUpdatedUser(result.data)
        this.notifyUpdate()
    }).catch( err => console.log(err) )
  }

  render() {
    return(
      <button className='rydeBlueBtn btn' onClick={(e) => this.removeDryverStatus(e)}>Remove Dryver status</button>
    )
  }
}

const NoLongerDryve = connect(null, mapDispatchToProps)(ConnectedNoLongerDryve);

export default NoLongerDryve;
