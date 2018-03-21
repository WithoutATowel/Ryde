import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../redux/store/index';
import { liftTokenToState } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    liftTokenToState: data => dispatch(liftTokenToState(data))
  }
}

const mapStateToProps = state => {
  return { token: state.token, user: state.user, currentPage: state.currentPage };
}

class ConnectedSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = this.name.value
    let email = this.email.value
    let password = this.password.value
    let dob = this.dob.value
    let homeStreet = this.homeStreet.value
    let homeCity = this.homeCity.value
    let homeState = this.homeState.value
    let homeZip = this.homeZip.value
    let workStreet = this.workStreet.value
    let workCity = this.workCity.value
    let workState = this.workState.value
    let workZip = this.workZip.value
    axios.post('/auth/signup',
      {name, email, password, dob, homeStreet, homeCity, homeState, homeZip, workStreet, workCity, workState, workZip})
        .then( result => {
        localStorage.setItem('rydeAppToken', result.data.token) // change 'mernToken' to your app name or something useful
        this.props.liftTokenToState(result.data)
    })
  }

  render() {
    if ( this.props.user && Object.keys(this.props.user).length > 0 ) {
      return (<Redirect to={{ pathname: this.props.currentPage }} />)  // ~~~~~~~~~~~NEED TO FIX REDIRECT TO CURRENT PAGE~~~~~~~~~~~~~
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          Name - required: <input type='text' ref={ input => this.name = input } placeholder='Full name' required />
          <br />
          Email - required: <input type='email' ref={ input => this.email = input } placeholder='email@email.com' required />
          <br />
          Password - required: <input type='password' ref={ input => this.password = input } placeholder='P@$$w0rD! - must be a minimum of 8 characters' required />
          <br />
          Date of birth (any string for now) - required: <input type='text' ref={ input => {this.dob = input}} placeholder='March 15 1990' required />
          <br />
          Home Street Address: <input type='text' ref={ input => this.homeStreet = input } placeholder='123 Main St' />
          <br />
          Home City - required: <input type='text' ref={ input => this.homeCity = input} placeholder='Seattle' required />
          <br />
          Home State - required: <select defaultValue='no-value' ref={ input => this.homeState = input} required >
                                        <option value='no-value' disabled >Please select...</option>
                                      	<option value="AL">Alabama</option>
                                      	<option value="AK">Alaska</option>
                                      	<option value="AZ">Arizona</option>
                                      	<option value="AR">Arkansas</option>
                                      	<option value="CA">California</option>
                                      	<option value="CO">Colorado</option>
                                      	<option value="CT">Connecticut</option>
                                      	<option value="DE">Delaware</option>
                                      	<option value="DC">District Of Columbia</option>
                                      	<option value="FL">Florida</option>
                                      	<option value="GA">Georgia</option>
                                      	<option value="HI">Hawaii</option>
                                      	<option value="ID">Idaho</option>
                                      	<option value="IL">Illinois</option>
                                      	<option value="IN">Indiana</option>
                                      	<option value="IA">Iowa</option>
                                      	<option value="KS">Kansas</option>
                                      	<option value="KY">Kentucky</option>
                                      	<option value="LA">Louisiana</option>
                                      	<option value="ME">Maine</option>
                                      	<option value="MD">Maryland</option>
                                      	<option value="MA">Massachusetts</option>
                                      	<option value="MI">Michigan</option>
                                      	<option value="MN">Minnesota</option>
                                      	<option value="MS">Mississippi</option>
                                      	<option value="MO">Missouri</option>
                                      	<option value="MT">Montana</option>
                                      	<option value="NE">Nebraska</option>
                                      	<option value="NV">Nevada</option>
                                      	<option value="NH">New Hampshire</option>
                                      	<option value="NJ">New Jersey</option>
                                      	<option value="NM">New Mexico</option>
                                      	<option value="NY">New York</option>
                                      	<option value="NC">North Carolina</option>
                                      	<option value="ND">North Dakota</option>
                                      	<option value="OH">Ohio</option>
                                      	<option value="OK">Oklahoma</option>
                                      	<option value="OR">Oregon</option>
                                      	<option value="PA">Pennsylvania</option>
                                      	<option value="RI">Rhode Island</option>
                                      	<option value="SC">South Carolina</option>
                                      	<option value="SD">South Dakota</option>
                                      	<option value="TN">Tennessee</option>
                                      	<option value="TX">Texas</option>
                                      	<option value="UT">Utah</option>
                                      	<option value="VT">Vermont</option>
                                      	<option value="VA">Virginia</option>
                                      	<option value="WA">Washington</option>
                                      	<option value="WV">West Virginia</option>
                                      	<option value="WI">Wisconsin</option>
                                      	<option value="WY">Wyoming</option>
                                      </select>
          <br />
          Home Zip: <input type='number' ref={ input => this.homeZip = input} placeholder='Zip code: 98101' />
          <br />
          Work Street Address: <input type='text' ref={ input => this.workStreet = input} placeholder='' />
          <br />
          Work City: <input type='text' ref={ input => this.workCity = input} placeholder='' />
          <br />
          Work State(WA): <select defaultValue='no-value' ref={ input => this.workState = input} >
                            <option value='no-value' disabled >Please select...</option>
                          	<option value="AL">Alabama</option>
                          	<option value="AK">Alaska</option>
                          	<option value="AZ">Arizona</option>
                          	<option value="AR">Arkansas</option>
                          	<option value="CA">California</option>
                          	<option value="CO">Colorado</option>
                          	<option value="CT">Connecticut</option>
                          	<option value="DE">Delaware</option>
                          	<option value="DC">District Of Columbia</option>
                          	<option value="FL">Florida</option>
                          	<option value="GA">Georgia</option>
                          	<option value="HI">Hawaii</option>
                          	<option value="ID">Idaho</option>
                          	<option value="IL">Illinois</option>
                          	<option value="IN">Indiana</option>
                          	<option value="IA">Iowa</option>
                          	<option value="KS">Kansas</option>
                          	<option value="KY">Kentucky</option>
                          	<option value="LA">Louisiana</option>
                          	<option value="ME">Maine</option>
                          	<option value="MD">Maryland</option>
                          	<option value="MA">Massachusetts</option>
                          	<option value="MI">Michigan</option>
                          	<option value="MN">Minnesota</option>
                          	<option value="MS">Mississippi</option>
                          	<option value="MO">Missouri</option>
                          	<option value="MT">Montana</option>
                          	<option value="NE">Nebraska</option>
                          	<option value="NV">Nevada</option>
                          	<option value="NH">New Hampshire</option>
                          	<option value="NJ">New Jersey</option>
                          	<option value="NM">New Mexico</option>
                          	<option value="NY">New York</option>
                          	<option value="NC">North Carolina</option>
                          	<option value="ND">North Dakota</option>
                          	<option value="OH">Ohio</option>
                          	<option value="OK">Oklahoma</option>
                          	<option value="OR">Oregon</option>
                          	<option value="PA">Pennsylvania</option>
                          	<option value="RI">Rhode Island</option>
                          	<option value="SC">South Carolina</option>
                          	<option value="SD">South Dakota</option>
                          	<option value="TN">Tennessee</option>
                          	<option value="TX">Texas</option>
                          	<option value="UT">Utah</option>
                          	<option value="VT">Vermont</option>
                          	<option value="VA">Virginia</option>
                          	<option value="WA">Washington</option>
                          	<option value="WV">West Virginia</option>
                          	<option value="WI">Wisconsin</option>
                          	<option value="WY">Wyoming</option>
                          </select>
          <br />
          Work Zip: <input type='number' ref={ input => this.workZip = input} placeholder='Zip code: 98101' />
          <br />
          <input type='submit' value='Sign Up!' />
        </form>
      )
    }
  }

}

const Signup = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignup);

export default Signup;
