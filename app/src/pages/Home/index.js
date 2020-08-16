import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';

import Twitter from '../../assets/twitter.svg'
import FeedIcon from '../../assets/Feed-icon.svg';
import Email from '../../assets/email.svg';

import './style.css';

export default function Home() {
  return (
    <>
      <header className='jumbotron'>
        <div id='jumbotron-container' className='container' >
          <h1> FIND THE JOB YOU WANT </h1>
          <p> GitHub Jobs is a great place to find open positions at software development companies for your technical talents. </p>
          <hr className="my-4" />
          <strong> Stay updated! </strong>

          <nav id='header-nav' className='nav'>
            <Link to='https://twitter.com/GitHubJobs'> <img src={Twitter} height="22px" alt='twitter icon'/> Twitter </Link>
            <Link to='/#'> <img src={FeedIcon} height="22px" alt='Feed icon'/> Atom Feed </Link>
            <Link to='/#'> <img src={Email} height="22px" alt='Email icon'/> Subscribe email </Link>

          </nav>

        </div>
      </header>

      <div className="container" style={{ marginBottom: '80px' }}>
        
        <SearchForm/>

        <section>
          <h2> Featured Jobs </h2>
          <ul>
            <li> Java Software Developer</li>
            <li> Full Stack Developer </li>
          </ul>

          <button> More Awesome Jobs &rarr;</button>

          <h2> Hot Searches </h2>
          <ul>
            <li> PHP </li>
            <li> Rails </li>
            <li> Python </li>
            <li> Java Script </li>
            <li> Scala </li>
            <li> Android </li>
            <li> iOS </li>
            <li> Linux </li>
            <li> Erlang </li>
            <li> San Francisco </li>
            <li> New York City </li>
            <li> Austin, Tx </li>
            <li> London </li>
            <li> Europe </li>
          </ul>

          <aside>
            <span> Folow GitHub Jobs on Twitter </span>
            <div>
              <span> Featured Company </span>
              <img src="#" alt="Company" />
              <span> 2 Jobs on Company </span>
            </div>
          </aside>
        </section>
      </div>
    </>
  )
}