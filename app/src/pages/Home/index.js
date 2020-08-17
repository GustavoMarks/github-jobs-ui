import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../../components/SearchForm';
import FancySheet from '../../components/FancySheet';
import JobList from '../../components/JobsList';

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
            <Link to='https://twitter.com/GitHubJobs'> <img src={Twitter} height="22px" alt='twitter icon' /> Twitter </Link>
            <Link to='/#'> <img src={FeedIcon} height="22px" alt='Feed icon' /> Atom Feed </Link>
            <Link to='/#'> <img src={Email} height="22px" alt='Email icon' /> Subscribe email </Link>

          </nav>

        </div>
      </header>

      <div className="container" style={{ marginBottom: '80px' }}>

        <SearchForm />

        <FancySheet>
          <section>
            <h2 id="section-title"> Featured Jobs </h2>
            <hr/>

            <JobList list={tempData}/>            

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
        </FancySheet>
      </div>
    </>
  )
}

const tempData = [{
  id: 1,
  title: 'Senior Python Engenieer',
  location: 'Austion, TX/ Romote',
  crated_at: 'Fri Aug 14 18:50:13 UTC 2020',
  company: 'StepRock, Inc',
  type: 'Full time'
},
{
  id: 1,
  title: 'Senior Python Engenieer',
  location: 'Austion, TX/ Romote',
  crated_at: 'Fri Aug 14 18:50:13 UTC 2020',
  company: 'StepRock, Inc',
  type: 'Full time'
}]