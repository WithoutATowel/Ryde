import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log('Logging out')
    localStorage.removeItem('mernToken')
    this.setState({ token: '', user: {} })
  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === 'null' || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      axios.post('/auth/me/from/token', {
        token // same as token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
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

export default App;
