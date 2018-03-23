import React, { Component } from 'react';
// import store from '../redux/store/index';

export const BecomeADryver = props => {

  return(
    <form onSubmit={(e) => props.becomeDryverSubmit(e)}>
      <input type='text' placeholder='Car type: i.e. Toyota 4Runner' ref={(input) => {carTypeInput = input}} />
      <input type='text' placeholder="Driver's license number" />
      <input type='submit' className='rydeBlueBtn btn' value='Submit Dryver info' />
    </form>
  )
}
