import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import store from './redux/store/index';
import { liftTokenToState } from './redux/actions/index';
import { logout } from './redux/actions/index';
import './css/App.css';
import Navbar from './components/Navbar';
import BigSearch from './components/BigSearch';
import Home from './pages/Home';
import Discover from './pages/Discover';
import { UserProfile } from './pages/UserProfile';
import PublicProfile from './pages/PublicProfile';
import { OurTeam } from './pages/OurTeam';
import { Footer } from './components/Footer';
import PostARyde from './pages/PostARyde';
import MyRydes from './pages/MyRydes.js'
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios'

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = state => {
  return { token: state.token, user: state.user };
}

class ConnectedApp extends Component {
  constructor(props){
    super(props)
  }

  // liftTokenToState(data) {
  //   this.setState({
  //     token: data.token,
  //     user: data.user
  //   })
  // }

  // logout() {
  //   console.log('Logging out')
  //   localStorage.removeItem('rydeAppToken')
  //   this.setState({ token: '', user: {} })
  // }

  componentDidMount() {
    let token = localStorage.getItem('rydeAppToken')
    if (token === 'undefined' || token === 'null' || token === '' || token === undefined || token === null) {
      localStorage.removeItem('rydeAppToken')
      this.props.logout()
    } else {
      axios.post('/auth/me/from/token', {
        token // same as token: token
      }).then( result => {
        localStorage.setItem('rydeAppToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch( err => console.log(err))
    }
  }

  render() {
     ///////////////////////////////////////////////
    // ~~~|| O AUTH CODE BOILERPLATE BELOW ||~~~ //
   ///////////////////////////////////////////////

    // let theUser = this.state.user
    // if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
    //   return (
    //     <div>
    //       <UserProfile user={theUser} logout={this.logout} />
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div className="App">
    //       <Signup liftToken={this.liftTokenToState} />
    //       <Login liftToken={this.liftTokenToState} />
    //     </div>
    //   )
    // }

    ///////////////////////////////////////////////
   // ~~~|| O AUTH CODE BOILERPLATE ABOVE ||~~~ //
  ///////////////////////////////////////////////

    return (
      <div>
        <Router>
          <div>  {/* div needs to be here bc router can only have one child */}
            <Navbar />

            {/* ROUTES BELOW HERE */}
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/discover' component={Discover} />
              <Route path='/profile' component={UserProfile} />  {/* placeholder so we can easily get to page */}
              <Route path='/publicprofile' component={PublicProfile} />  {/* placeholder so we can easily get to page */}
              <Route path='/login' component={Login} />  {/* placeholder so we can easily get to page */}
              <Route path='/signup' component={Signup} />  {/* placeholder so we can easily get to page */}
              <Route path='/ourteam' component={OurTeam} />
              <Route path='/postaryde' component={PostARyde} />
              <Route path='/myrydes' component={MyRydes} />
              {/* <Route path='/login' component={() => (
                <Login user={this.state.user} liftToken={this.liftTokenToState} />
              )} />
              <Route path='/signup' component={() => (
                <Signup user={this.state.user} liftToken={this.liftTokenToState} />
              )} /> */}
            </div>
            {/* ROUTES ABOVE HERE */}

          </div>
        </Router>

      <Footer />
    </div>
    )
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
