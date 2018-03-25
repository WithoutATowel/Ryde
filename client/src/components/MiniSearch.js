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
      redirect:false
    }
  }

  handleMiniSearch = (e) =>{
    e.preventDefault()
    if(this.props.user){
      var userId = this.props.user._id
    }
    let startZip = this.zipStartInput.value
    let endZip = this.zipEndInput.value
    let dateFormat = this.departDate.value.split('-').map((date,index)=>{
      if(index === 1){
        return +date-1
      } else {
        return +date
      }
    })
    let date = Date.UTC(...dateFormat)
    console.log(date);
    axios.post('/minisearch',
    {startZip,endZip,date,userId}).then(result =>{
      console.log(result.data)
      this.props.liftMiniSearch(result.data)
      this.setState({
        redirect:true
      })
    })
  }

  render() {
    if(this.state.redirect){
      return(<Redirect to="/discover" startZip={()=>{this.zipStartInput}} endZip={()=>{this.zipEndInput}} date={()=>{this.startDateInput}} />)
    }

    return (

        <form className="row center" onSubmit={(e)=>this.handleMiniSearch(e)}>
          <div className='col m4'>
            <input className='minisearchinput' type='number' maxLength='5' placeholder='Starting... Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipStartInput = input;}} />
          </div>
          <div className='col m4'>
            <input className='minisearchinput' type='number' maxLength='5' placeholder='Going to... Zipcode' autoComplete='postal-code' ref={(input)=>{this.zipEndInput = input;}} />
          </div>
          <div className='col m4'>
            <Input type="date" className="datepicker minisearchinput" options={{format: 'yyyy-mm-dd'}} placeholder="Date To Depart" autoComplete='departure-time' ref={(input)=>{this.departDate = input;}} />
          </div>
          <button className='center rydeGreenBtn btn' type='submit'>Submit</button>
        </form>

    )
  }
}

const MiniSearch = connect(mapStateToProps, mapDispatchToProps)(ConnectedMiniSearch);
export default MiniSearch;
