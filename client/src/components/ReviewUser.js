import React, { Component } from 'react';
// import store from '../redux/store/index';
import { liftTokenToState } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class ReviewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRating: 1
    }
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleRatingChange(e) {
    this.setState({ selectedRating: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('HANDLE SUBMIT this props clickeduserid', this.props.clickedUserId)
    console.log('this props usertype', this.props.userType)
    axios.post('/profile/' + this.props.clickedUserId + '/reviewuser', {
      id: this.props.clickedUserId,
      rating: parseInt(this.state.selectedRating),
      user: this.props.userType
    }).then( result => {
      console.log('here is result from backend, result.data', result.data)
    }).catch( err => console.log(err) )
  }

  render() {
    console.log(this.state.selectedRating)

    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input name='this.props.inputName' value='1' checked={this.state.selectedRating === '1'} onChange={this.handleRatingChange} type='radio' id={this.props.userType + 'one-star'}/>
        <label htmlFor={this.props.userType + 'one-star'}>1</label>
        <input name='this.props.inputName' value='2' checked={this.state.selectedRating === '2'} onChange={this.handleRatingChange} type='radio' id={this.props.userType + 'two-star'} />
        <label htmlFor={this.props.userType + 'two-star'}>2</label>
        <input name='this.props.inputName' value='3' checked={this.state.selectedRating === '3'} onChange={this.handleRatingChange} type='radio' id={this.props.userType + 'three-star'} />
        <label htmlFor={this.props.userType + 'three-star'}>3</label>
        <input name='this.props.inputName' value='4' checked={this.state.selectedRating === '4'} onChange={this.handleRatingChange} type='radio' id={this.props.userType + 'four-star'} />
        <label htmlFor={this.props.userType + 'four-star'}>4</label>
        <input name='this.props.inputName' value='5' checked={this.state.selectedRating === '5'} onChange={this.handleRatingChange} type='radio' id={this.props.userType + 'five-star'} />
        <label htmlFor={this.props.userType + 'five-star'}>5</label>
        <input type='submit' className='rydeBlueBtn btn' value='Submit rating' />
      </form>
    )
  }
}

export default ReviewUser;
