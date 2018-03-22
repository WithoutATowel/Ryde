import React, { Component } from 'react';
import RydeForm from '../components/RydeForm';
import { connect } from 'react-redux';
import { liftTokenToState } from '../redux/actions/index';
// import store from '../redux/store/index';
import axios from 'axios';

const mapDispatchToProps = dispatch => {
  return {
    liftTokenToState: data => dispatch(liftTokenToState(data))
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

class ConnectedEditARyde extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reoccurring: false,
      twoWay: false,
      rydeName: '',
      rydeName: '',
      startStreet: '',
      startCity: '',
      startState: '',
      startZip: '',
      endStreet: '',
      endCity: '',
      endState: '',
      endZip: '',
      departDate: '',
      departTime: '',
      returnDepartDate: '',
      returnDepartTime: '',
      reoccurringSun: false,
      reoccurringMon: false,
      reoccurringTues: false,
      reoccurringWed: false,
      reoccurringThurs: false,
      reoccurringFri: false,
      reoccurringSat: false,
      cost: '',
      costBreakdown: '',
      smoking: false,
      tripPets: false,
      carType: '',
      seats: '',

    }
    console.log('initial state: ', this.state)
    this.handlePostARydeSubmit = this.handlePostARydeSubmit.bind(this)
    this.handleReoccurringChange = this.handleReoccurringChange.bind(this)
    this.handleTwoWayChange = this.handleTwoWayChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    console.log('on Input Change')
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    var getAndStorePost = () => {
      axios.get('/editARyde/' + '5ab194b8d10bf8064db31947')
      .then( result => {
        if (result.data && result.data.length > 0) {
          console.log('results: ',result.data[0])
          let results = result.data[0]
          this.setState({
            reoccurring: false,
            twoWay: false,
            rydeName: results.rydeName,
            startStreet: results.startAddress.street,
            startCity: results.startAddress.city,
            startState: results.startAddress.state,
            startZip: results.startAddress.zip,
            endStreet: results.endAddress.street,
            endCity: results.endAddress.city,
            endState: results.endAddress.state,
            endZip: results.endAddress.zip,
            departDate: '',
            departTime: '',
            returnDepartDate: '',
            returnDepartTime: '',
            reoccurringSun: results.reoccurringDays[0] ? 'checked' : null,
            reoccurringMon: results.reoccurringDays[1] ? 'checked' : null,
            reoccurringTues: results.reoccurringDays[2] ? 'checked' : null,
            reoccurringWed: results.reoccurringDays[3] ? 'checked' : null,
            reoccurringThurs: results.reoccurringDays[4] ? 'checked' : null,
            reoccurringFri: results.reoccurringDays[5] ? 'checked' : null,
            reoccurringSat: results.reoccurringDays[6] ? 'checked' : null,
            cost: results.cost,
            costBreakdown: results.costBreakdown,
            smoking: results.smoking,
            tripPets: results.pets ? 'checked' : '',
            carType:  results.carType,
            seats: results.seats,
          });


        } else {
          this.setState({results: []});
          console.log('fails')
        }
      });

    }
    if (this.props.user) {
      getAndStorePost()
    } else {
      console.log('hello else')
      let token = localStorage.getItem('rydeAppToken')
      if (token === 'undefined' || token === 'null' || token === '' || token === undefined || token === null) {
        localStorage.removeItem('rydeAppToken')
        this.props.logout()
      } else {
        axios.post('/auth/me/from/token', {
          token
        }).then( result => {
          localStorage.setItem('rydeAppToken', result.data.token)
          this.props.liftTokenToState(result.data);
          getAndStorePost()
        }).catch( err => console.log(err))
      }
    }
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
    let Sun = this.state.reoccurringSun
    let Mon = this.state.reoccurringMon
    let Tues = this.state.reoccurringTues
    let Wed = this.state.reoccurringWed
    let Thurs = this.state.reoccurringThurs
    let Fri = this.state.reoccurringFri
    let Sat = this.state.reoccurringSat
    let reoccurringArray = []
    reoccurringArray.push(Sun)
    reoccurringArray.push(Mon)
    reoccurringArray.push(Tues)
    reoccurringArray.push(Wed)
    reoccurringArray.push(Thurs)
    reoccurringArray.push(Fri)
    reoccurringArray.push(Sat)

    console.log(this.state.departDate,this.state.departTime,this.state.departDate.split('-'),this.state.departTime.split(':'));
    let newDepartDate = this.state.departDate.split('-');
    let newDepartTime = this.state.departTime.split(':');

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
    console.log('departDateTime ', departDateTime)


    var trip = {
      driverId: this.props.user._id,
      rydeName: this.state.rydeName,
      startAddress: {
        street: this.state.startStreet,
        city: this.state.startCity,
        state: this.state.startState,
        zip: this.state.startZip,
      },
      endAddress: {
        street: this.state.endStreet,
        city: this.state.endCity,
        state: this.state.endState,
        zip: this.state.endZip,
      },
      departDate: departDateTime,
      reoccurring: this.state.reoccurring,
      reoccurringDays: reoccurringArray,
      cost: this.state.cost,
      costBreakdown: this.state.costBreakdown,
      smoking: this.state.smoking,
      pets: this.state.tripPets,
      carType: this.state.carType,
      seats: this.state.seats,
    }
    console.log(trip)

    axios.post('/editARyde/' + '5ab194b8d10bf8064db31947', trip).then(result => {
      console.log('added one way ', result.data)

    }).catch(err => {
      console.log(err);
    })

  }


  render() {
    const reoccurringShowHide = this.state.reoccurring ? 'show' : 'hide';
    const twoWayShowHide = this.state.twoWay ? 'show' : 'hide';
    console.log('currentState: ', this.state)
    return (
      <div id="post-a-ryde" className="container">
        <h2>Edit A Ryde</h2>
        <RydeForm
          isEditPage={true}
          rydeName={this.state.rydeName}
          onInputChange={this.handleInputChange}
          startStreet={this.state.startStreet}
          startCity={this.state.startCity}
          startState={this.state.startState}
          startZip={this.state.startZip}
          endStreet={this.state.endStreet}
          endCity={this.state.endCity}
          endState={this.state.endState}
          endZip={this.state.endZip}
          departDate={this.state.departDate}
          departTime={this.state.departTime}
          twoWay={this.state.twoWay}
          onTwoWayChange={this.handleTwoWayChange}
          twoWayShowHide={twoWayShowHide}
          returnDepartDate={this.state.returnDepartDate}
          returnDepartTime={this.state.returnDepartTime}
          reoccurring={this.state.reoccurring}
          reoccurringShowHide={reoccurringShowHide}
          onReoccurringChange={this.handleReoccurringChange}
          reoccurringSun={this.state.reoccurringSun}
          reoccurringMon={this.state.reoccurringMon}
          reoccurringTues={this.state.reoccurringTues}
          reoccurringWed={this.state.reoccurringWed}
          reoccurringThurs={this.state.reoccurringThurs}
          reoccurringFri={this.state.reoccurringFri}
          reoccurringSat={this.state.reoccurringSat}
          cost={this.state.cost}
          costBreakdown={this.state.costBreakdown}
          smoking={this.state.smoking}
          pets={this.state.tripPets}
          carType={this.state.carType}
          seats={this.state.seats}
          onPostARydeSubmit={this.handlePostARydeSubmit} />
      </div>
    )
  }
}

const EditARyde = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditARyde);


export default EditARyde;
