import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import store from '../redux/store/index';
import { liftTokenToState } from '../redux/actions/index';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let name = this.state.name
    let email = this.state.email
    let password = this.state.password
    let state = this.selectUSState.value
    let city = this.cityInput.value
    let dob = this.dobInput.value
    axios.post('/auth/signup',
    {name,email,password,state,city,dob}).then( result => {
      console.log(result.data) // result is result from back end responding to post request and .data is where axios stores the returned data
      localStorage.setItem('rydeAppToken', result.data.token) // change 'mernToken' to your app name or something useful
      liftTokenToState(result.data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col s12 m6">
            Name - required: <input type='text' value={this.state.name} onChange={this.handleNameChange} placeholder='Full name' required />
          </div>
          <div className="col s12 m6">
            Email - required: <input type='email' value={this.state.email} onChange={this.handleEmailChange} placeholder='email@email.com' required />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m9">
            Password - required: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} placeholder='P@$$w0rD! - must be a minimum of 8 characters' required />
          </div>
          <div className="col s12 m3">
            Date of birth (any string for now) - required: <input type='text' ref={ (input) => {this.dobInput = input}} placeholder='March 15 1990' required />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            Home Street Address: <input type='text' placeholder='123 Main St' />
          </div>
          <div className="col s12 m3">
            Home City - required: <input type='text' ref={input => {this.cityInput = input}} placeholder='Seattle' required />
          </div>
          <div className="col s12 m2">
            Home State - required (WA): <select ref={(input) => {this.selectUSState = input}} required>
                                          <option value="" disabled selected>Select one--</option>
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
          </div>
          <div className="col s12 m3">
            Home Zip: <input type='number' placeholder='Zip code: 98101' />
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            Work Street Address: <input type='text' placeholder='' />
          </div>
          <div className="col s12 m3">
            Work City: <input type='text' placeholder='' />
          </div>
          <div className="col s12 m2">
            Work State(WA): <select>
                              <option value="" disabled selected>Select one--</option>
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
          </div>
          <div className="col s12 m3">
            Work Zip: <input type='number' placeholder='Zip code: 98101' />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <input type='submit' className="rydeBlueBtn btn" value='Sign Up!' />
          </div>
        </div>
      </form>
    )
  }

}

export default Signup;
