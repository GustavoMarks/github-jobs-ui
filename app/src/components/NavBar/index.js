import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Collapse from '../../assets/Collapse.svg';

import './style.css';

function Navbar() {
  const history = useHistory();
  const currentPath = history.location.pathname.toLocaleLowerCase();

  const [collapse, setCollapse] = useState(window.screen.width > 496 ? true : false);

  return (
    <div id="navbar-content">
      <div className="container">
        <nav className="navbar" >
          <Link className="navbar-brand" to='/'>
            <img src={Logo} alt='Logo' />
          </Link>

          <button id="collapse-btn" onClick={() => setCollapse(!collapse)} >
            <img src={Collapse} height='20' alt='colapse icon' />
          </button>

          <span id="navbar-links" className="navbar-text" style={collapse ? { display: 'block' } : { display: 'none' }} >
            <Link to='/jobs' > <span style={currentPath.includes('/jobs') ? { color: '#1D5C8F' } : null} > All jobs </span></Link>
            <Link to='/faq' > <span style={currentPath.includes('/faq') ? { color: '#1D5C8F' } : null} > How it works </span></Link>
          </span>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(Navbar);