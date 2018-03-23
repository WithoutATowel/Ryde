import React, { Component } from 'react';
import { connect } from 'react-redux';
import { liftUpdatedUser } from '../redux/actions/index';
// import store from '../redux/store/index';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return { liftUpdatedUser: user => dispatch(liftUpdatedUser(user)) };
}

class ConnectedNoLongerDryve extends Component {
  constructor(props) {
    super(props)
  }

  becomeDryverSubmit(e) {
    e.preventDefault()
    let car = this.carType.value
    let driversLicense = this.driversLicense.value
    let userId = this.props.userId
    axios.post('/profile/' + this.props.userId + '/becomedryver', {car, driversLicense, userId})
      .then( result => {
        this.props.liftUpdatedUser(result.data)
    }).catch( err => console.log(err) )
  }

  render() {
    return(
      <button>Remove Dryver status</button>
    )
  }
}

const NoLongerDryve = connect(null, mapDispatchToProps)(ConnectedNoLongerDryve);

export default NoLongerDryve;
