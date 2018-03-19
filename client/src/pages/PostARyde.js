import React, { Component } from 'react';
import '../css/postaryde.css';
import RydeForm from '../components/RydeForm';

class PostARyde extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reoccurring: false,
      twoWay: false,
    }
    console.log('initial state: ', this.state)
    this.handlePostARydeSubmit = this.handlePostARydeSubmit.bind(this)
    this.handleReoccurringChange = this.handleReoccurringChange.bind(this)
    this.handleTwoWayChange = this.handleTwoWayChange.bind(this)
  }

  handleReoccurringChange(e) {
    this.setState({
      reoccurring: e.target.checked,
    })
  }

  handleTwoWayChange(e) {
    this.setState({
      twoWay: e.target.checked,
    })
  }

  handlePostARydeSubmit(e) {
    e.preventDefault()
    let Sun = this.reoccurringSun.checked
    let Mon = this.reoccurringMon.checked
    let Tues = this.reoccurringTues.checked
    let Wed = this.reoccurringWed.checked
    let Thurs = this.reoccurringThurs.checked
    let Fri = this.reoccurringFri.checked
    let Sat = this.reoccurringSat.checked
    let reoccurringArray = []
    reoccurringArray.push(Sun)
    reoccurringArray.push(Mon)
    reoccurringArray.push(Tues)
    reoccurringArray.push(Wed)
    reoccurringArray.push(Thurs)
    reoccurringArray.push(Fri)
    reoccurringArray.push(Sat)


    let newDepartDate = this.departDate.value.split('-');
    let newDepartTime = this.departTime.value.split(':');

    var numDepartDate = []
    var numDepartTime = []

    newDepartDate.forEach(function(newDate) {
      numDepartDate.push(+newDate)
    })
    newDepartTime.forEach(function(newDate) {
      numDepartTime.push(+newDate)
    })

    console.log('numDepartDate ', numDepartDate)
    console.log('numDepartTime ', numDepartTime)
    console.log('dateTime ', ...numDepartDate, ...numDepartTime)
    // year, month, day, hour, minute, second, and millisecond
    var departDateTime =  Date.UTC(...numDepartDate, ...numDepartTime)


    var trip = {
      driverId: '',
      rydeName: this.rydeName.value,
      startAddress: {
        street: this.startStreet.value,
        city: this.startCity.value,
        state: this.startState.value,
        zip: this.startZip.value,
      },
      endAddress: {
        street: this.endStreet.value,
        city: this.endCity.value,
        state: this.endState.value,
        zip: this.endZip.value,
      },
      departDate: this.departDate.value,
      departTime: this.departTime.value,
      reoccurring: this.reoccurring.checked,
      reoccurringDays: reoccurringArray,
      cost: this.cost.value,
      costBreakdown: this.costBreakdown.value,
      smoking: this.smoking.checked,
      pets: this.pets.checked,
      carType: this.carType.value,
      seats: this.seats.value,
    }
    console.log(trip)

    if (this.twoWay.checked) {
      var returnTrip = {
        driverId: '',
        rydeName: this.rydeName.value,
        startAddress: {
          street: this.endStreet.value,
          city: this.endCity.value,
          state: this.endState.value,
          zip: this.endZip.value
        },
        endAddress: {
          street: this.startStreet.value,
          city: this.startCity.value,
          state: this.startState.value,
          zip: this.startZip.value
        },
        returnDepartDate: this.departDate.value,
        returnDepartTime: this.departTime.value,
        reoccurring: this.reoccurring.checked,
        reoccurringDays: reoccurringArray,
        cost: this.cost.value,
        costBreakdown: this.costBreakdown.value,
        smoking: this.smoking.checked,
        pets: this.pets.checked,
        carType: this.carType.value,
        seats: this.seats.value,
      }
      console.log(returnTrip)
    }

    // axios.post('/postaryde', trip).then(result => {
    //   console.log(result.data)
    // }).catch(err => {
    //   console.log(err);
    // })

  }

  render() {
    const reoccurringShowHide = this.state.reoccurring ? 'show' : 'hide';
    const twoWayShowHide = this.state.twoWay ? 'show' : 'hide';
    return (
      <div id="post-a-ryde">
        <h2>Post A Ryde</h2>
        <RydeForm
          rydeName={(input) => this.rydeName = input}
          startStreet={(input) => this.startStreet = input}
          startCity={(input) => this.startCity = input}
          startState={(input) => this.startState = input}
          startZip={(input) => this.startZip = input}
          endStreet={(input) => this.endStreet = input}
          endCity={(input) => this.endCity = input}
          endState={(input) => this.endState = input}
          endZip={(input) => this.endZip = input}
          departDate={(input) => this.departDate = input}
          departTime={(input) => this.departTime = input}
          twoWay={(input) => this.twoWay = input}
          onTwoWayChange={this.handleTwoWayChange}
          twoWayShowHide={twoWayShowHide}
          reoccurring={(input) => this.reoccurring = input}
          reoccurringShowHide={reoccurringShowHide}
          onReoccurringChange={this.handleReoccurringChange}
          reoccurringSun={(input) => this.reoccurringSun = input}
          reoccurringMon={(input) => this.reoccurringMon = input}
          reoccurringTues={(input) => this.reoccurringTues = input}
          reoccurringWed={(input) => this.reoccurringWed = input}
          reoccurringThurs={(input) => this.reoccurringThurs = input}
          reoccurringFri={(input) => this.reoccurringFri = input}
          reoccurringSat={(input) => this.reoccurringSat = input}
          cost={(input) => this.cost = input}
          costBreakdown={(input) => this.costBreakdown = input}
          smoking={(input) => this.smoking = input}
          pets={(input) => this.pets = input}
          carType={(input) => this.carType = input}
          seats={(input) => this.seats = input}
          onPostARydeSubmit={this.handlePostARydeSubmit} />
      </div>
    )
  }
}

export default PostARyde;
