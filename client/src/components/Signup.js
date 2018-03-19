import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../redux/store/index';
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
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data) // result is result from back end responding to post request and .data is where axios stores the returned data
      localStorage.setItem('rydeAppToken', result.data.token) // change 'mernToken' to your app name or something useful
      liftTokenToState(result.data)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name: <input type='text' value={this.state.name} onChange={this.handleNameChange} />
        <br />
        Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
        <br />
        Password: <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
        <br />
        Home Street Address: <input type='text' />
        <br />
        Home City - required: <input type='text' />
        <br />
        Home State - required (WA): <input type='text' />
        <br />
        Home Zip: <input type='number' />
        <br />
        Work Street Address: <input type='text' />
        <br />
        Work City: <input type='text' />
        <br />
        Work State(WA): <input type='text' />
        <br />
        Work Zip: <input type='number' />
        <br />
        Date of birth (any number for now): <input type='number' />
        <br />
        <input type='submit' value='Sign Up!' />
      </form>
    )
  }

}

export default Signup;
