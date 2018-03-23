import React from 'react';
import { Link } from 'react-router-dom';

const NavLoggedOut = props => (
  <div className='nav-link-div'>

    <li><Link to='/profile/5ab36ae451987a5ee95bfe64'>ScottPT</Link></li>
    <li><Link to='/profile/5ab36ae451987a5ee95bfe60'>SeanPT</Link></li>
    <li><Link to='/profile/5ab36ae451987a5ee95bfe63'>BrantPT</Link></li>
    <li><Link to='/profile/5ab36ae451987a5ee95bfe62'>BrettPT</Link></li>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/discover'>Discover</Link></li>
    <li><Link to='/ourteam'>OurTeam</Link></li>
    <li><a href='#login-modal' className="modal-trigger ">Login</a></li>  {/* placeholder so we can easily get to page */}
    <li><a href='#signup-modal' className="modal-trigger ">Sign Up</a></li>  {/* placeholder so we can easily get to page */}
  </div>
)

export default NavLoggedOut;
