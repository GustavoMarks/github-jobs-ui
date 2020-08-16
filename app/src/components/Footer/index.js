import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import GitHubIcon from '../../assets/invertocat.png'

function Footer() {
  return (
    <div id="footer">
      <footer className='container navbar'>
        <nav>
          <a href='https://github.blog/'> The Github Blog </a>
          <a href='https://support.github.com/' > Contact </a>
          <a href='https://docs.github.com/en/github/site-policy/github-privacy-statement' > Privacy </a>
          <a href='https://docs.github.com/en/github/site-policy/github-terms-of-service' > Terms </a>
          <Link to='/api' > API </Link>
        </nav>

        <img src={GitHubIcon} height='25px' alt='Github icon' />

        <span> © 2020 Gustavo Marques. All rights reserved </span>

      </footer>
    </div>

  )
}

export default Footer;