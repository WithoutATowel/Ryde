import React, { Component } from 'react';
// import store from '../redux/store/index';

class BecomeADryver extends Component {
  constructor(props) {
    super(props)
  }

  becomeDryverSubmit(e) {
    e.preventDefault()
    let car = this.carType.value
    let driversLicense = this.driversLicense.value
    console.log(car, driversLicense)
    // axios.post('/?????????', {car, driversLicense})
    //     .then( result => {
    //     this.props.liftTokenToState(result.data)
    // }).catch( err => console.log(err) )
  }

  render() {
    return(
      <form onSubmit={(e) => this.becomeDryverSubmit(e)}>
        <input type='text' placeholder='Car type: i.e. Toyota 4Runner' ref={ input => {this.carType = input}} />
        <input type='text' placeholder="Driver's license number" ref={ input => {this.driversLicense = input}} />
        <input type='submit' className='rydeBlueBtn btn' value='Submit Dryver info' />
      </form>
    )
  }
}

export default BecomeADryver;
