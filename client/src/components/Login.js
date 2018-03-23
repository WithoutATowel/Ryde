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

class ConnectedLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      if (result.data.user) {
        localStorage.setItem('rydeAppToken', result.data.token)
        this.props.liftTokenToState(result.data)
      } else {
        console.log("Handle the lack of user here...")
      }
    }).catch( err => console.log(err) )
  }

  render() {
    if ( this.props.user && Object.keys(this.props.user).length > 0 ) {
      return (<Redirect to={{ pathname: this.props.currentPage }} />)
    } else {
      return(
        <form onSubmit={this.handleSubmit}>
          Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <br />
          Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          <div className="col s12 modal-buttons">
            <input type='submit' className="rydeBlueBtn btn modal-action modal-close" value='Log In' />
            <button className="rydeBlueBtn btn modal-action modal-close cancel-button">Cancel</button>
          </div>
        </form>
      )
    }
    // return (<p>yo</p>)
  }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(ConnectedLogin);

export default Login;
