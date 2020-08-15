import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <span><Link to='/'> Github jobs </Link></span>
      <Link to='/jobs' > All jobs </Link>
      <Link to='/faq' > How it works </Link>
    </nav>
  )
}

export default Navbar;