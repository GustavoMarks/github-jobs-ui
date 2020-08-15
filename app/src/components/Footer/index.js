import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <nav>
        <a href='https://github.blog/'> The Github Blog </a>
        <a href='https://support.github.com/' > Contact </a>
        <a href='https://docs.github.com/en/github/site-policy/github-privacy-statement' > Privacity </a>
        <a href='https://docs.github.com/en/github/site-policy/github-terms-of-service' > Terms </a>
        <Link to='/api' > API </Link>
      </nav>

      <img src='#' alt='Github icon' />

      <span> © 2020 Gustavo Marques. All rights reserved </span>

    </footer>

  )
}

export default Footer;