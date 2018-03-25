import React, { Component } from 'react';
import '../css/minisearch.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { liftMiniSearch } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';
import { Input } from 'react-materialize';

const mapDispatchToProps = dispatch => {
  return {
    liftMiniSearch: data => dispatch(liftMiniSearch(data))
  }
}
const mapStateToProps = state =>{
  return {user: state.user}
}
class ConnectedMiniSearch extends Component {
  constructor(props) {
    super(props)
    this.state ={
      redirect:false,
      date: ''
    }
  }

  handleMiniSearch = (e) =>{
    e.preventDefault()
    if(this.props.user){
      var userId = this.props.user._id
    }
    let startZip = this.zipStartInput.value
    let endZip = this.zipEndInput.value
    let dateFormat = this.state.date

    dateFormat ? (dateFormat = dateFormat.split('-').map((date,index)=>{
      if(index === 1){
        return +date-1
      } else {
        return +date
      }
    })) : (dateFormat = '')
    let date = Date.UTC(...dateFormat)
    let current = Date.now();
    if(!(date)){
      console.log(date, current);
      date = current
    }
    axios.post('/minisearch',
    {startZip,endZip,date,userId}).then(result =>{
      console.log(result.data)
      this.props.liftMiniSearch(result.data.newTrips)
      this.setState({
        redirect:true
      })
    })
  }

  handleStateInputChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to="/discover" startZip={()=>{this.zipStartInput}} endZip={()=>{this.zipEndInput}} date={()=>{this.startDateInput}} />)
    }

    return (

        <form className="row center" onSubmit={(e)=>this.handleMiniSearch(e)}>
          <div className='col m4'>
            <input className='minisearchinput' type='number' maxLength='5' placeholder='Departing zipcode' autoComplete='postal-code' ref={(input)=>{this.zipStartInput = input}} />
          </div>
          <div className='col m4'>
            <input className='minisearchinput' type='number' maxLength='5' placeholder='Destination zipcode' autoComplete='postal-code' ref={(input)=>{this.zipEndInput = input}} />
          </div>
          <div className='col m4'>
            <Input type="date" className="datepicker" options={{format: 'yyyy-mm-dd'}} placeholder="Date" autoComplete='departure-date' onChange={(e)=>this.handleStateInputChange(e)} />
          </div>
          <button className='center rydeGreenBtn btn' type='submit'>Submit</button>
        </form>

    )
  }
}

const MiniSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedMiniSearch);
export default MiniSearch;
