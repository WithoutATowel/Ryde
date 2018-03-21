import React from 'react';
import { Link } from 'react-router-dom';

const NavLoggedOut = props => (
  <div className='nav-link-div'>

    <li><Link to='/profile/5ab050cb20b8b12fdff5b67d'>Scott public test</Link></li>
    <li><Link to='/profile/5ab050cb20b8b12fdff5b679'>Sean public test</Link></li>
    <li><Link to='/profile/5ab050cb20b8b12fdff5b67c'>Brant public test</Link></li>
    <li><Link to='/profile/5ab050cb20b8b12fdff5b67b'>Brett public test</Link></li>

    <li><Link to='/'>Home</Link></li>
    <li><Link to='/discover'>Discover</Link></li>
    <li><Link to='/ourteam'>OurTeam</Link></li>
    <li><Link to='/login'>Log In</Link></li>  {/* placeholder so we can easily get to page */}
    <li><Link to='/signup'>Sign Up</Link></li>  {/* placeholder so we can easily get to page */}
  </div>
)

export default NavLoggedOut;
