import React, { Component } from 'react';
import '../css/minisearch.css';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../redux/store/index';
import { liftMiniSearch } from '../redux/actions/index';
import { Link,Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    liftMiniSearch: data => dispatch(liftMiniSearch(data))
  }
}

class ConnectedMiniSearch extends Component {
  constructor(props) {
    super(props)
    this.state ={
      redirect:false
    }
  }

  handleMiniSearch = (e) =>{
    e.preventDefault()
    let startZip = this.zipStartInput.value
    let endZip = this.zipEndInput.value
    let date = this.startDateInput.value

    axios.post('/minisearch',
    {startZip,endZip,date}).then(result =>{
      console.log(result.data)
      this.props.liftMiniSearch(result.data)
      this.setState({
        redirect:true
      })
    })
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to="/discover"/>)
    }
    console.log(this.state.redirect);
    return (
      <div>
        <form onSubmit={(e)=>this.handleMiniSearch(e)}>
          <input type='number' maxLength='5' placeholder='Starting... Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipStartInput = input;}} />
          <br />
          <input type='number' maxLength='5' placeholder='Going to... Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipEndInput = input;}} />
          <br />
          <input type='number' placeholder='Departure Date' autoComplete='departure-time' ref={(input)=>{this.startDateInput = input;}}/>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const MiniSearch = connect(null, mapDispatchToProps)(ConnectedMiniSearch);
export default MiniSearch;
