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
    }).catch( err => console.log(err) )
  }

  render() {
    if ( this.props.user && Object.keys(this.props.user).length > 0 ) {
      return (<Redirect to={{ pathname: this.props.currentPage }} />)  // ~~~~~~~~~~~NEED TO FIX REDIRECT TO CURRENT PAGE~~~~~~~~~~~~~
    } else {
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
                <input type='submit' className="rydeBlueBtn btn modal-action modal-close" value='Sign Up!' />
              </div>
            </div>
          </form>
        )
     }
  }
}

const Signup = connect(mapStateToProps, mapDispatchToProps)(ConnectedSignup);

export default Signup;
