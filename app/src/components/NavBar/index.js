import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './style.css';

function Navbar() {
  const history = useHistory();
  const currentPath = history.location.pathname.toLocaleLowerCase();

  return (
    <div id="navbar-content">
      <div className="container">
        <nav className="navbar" >
          <Link className="navbar-brand" to='/'>
            <img src={Logo} alt='Logo' />
          </Link>
          <span id="navbar-links" className="navbar-text">
            <Link to='/jobs' > <span style={currentPath.includes('/jobs') ? { color: '#1D5C8F' } : null} > All jobs </span></Link>
            <Link to='/faq' > <span style={currentPath.includes('/faq') ? { color: '#1D5C8F' } : null} > How it works </span></Link>
          </span>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(Navbar);