import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { liftTokenToState } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const mapDispatchToProps = dispatch =>{
  return {

  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class ConnectedDeleteUser extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      wrongEmail: false,
      wrongPassword: false
    }
  }

  handleEmailChange = (e) =>{
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }
  handlePasswordChange = (e) =>{
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
  }
  handleUserDeletionSubmit = (e) =>{
    e.preventDefault()
    let email = this.state.email
    let password = this.state.password
    let userId = this.props.user._id
    if(email === this.props.user.email){
      axios({
        url: '/deleteuser',
        method: 'delete',
        data: {email, password, userId}
      }).then(result =>{
        if(result.data === false){
          this.setState({
            wrongPassword: true
          })
        } else {
          console.log(result.data);
          <Redirect to='/' />
        }
      })
    } else {
      this.setState({
        wrongEmail:true
      })
      console.log('something');
    }
  }

  render(){
    var check
    if(this.state.wrongEmail){
      check = <div>You have entered a wrong email</div>
    } else if (this.state.wrongPassword){
      check = <div>You have entered a wrong Password</div>
    } else {
      check = <br />
    }
    return(
      <div>
        <h4>Confirm your details!</h4>
        {check}
        <form onSubmit={this.handleUserDeletionSubmit}>
          Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
          <br />
          Password: <input type='text' value={this.state.password} onChange={this.handlePasswordChange} />
          <br />
          <button type='submit'>Confirm Deletion</button>
        </form>
      </div>
    )
  }
}

const DeleteUser = connect(mapStateToProps, mapDispatchToProps)(ConnectedDeleteUser)
export default DeleteUser;
