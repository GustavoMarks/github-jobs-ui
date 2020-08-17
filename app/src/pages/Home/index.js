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
            <h3 className="section-title"> Featured Jobs </h3>
            <hr />

            <JobList list={tempData} />

            <Link id='more-jobs' to='/jobs'> More Awesome Jobs &rarr;</Link>
            <hr />
            <br />

            <h3 className="section-title"> Hot Searches </h3>
            <ul id='hot-searches-list'>
              <li> <Link to='/#'>PHP</Link>  </li>
              <li> <Link to='/#'>Rails</Link>  </li>
              <li> <Link to='/#'>Python</Link>  </li>
              <li> <Link to='/#'>Java Script</Link> </li>
              <li> <Link to='/#'>Scala</Link> </li>
              <li> <Link to='/#'>Android</Link> </li>
              <li> <Link to='/#'>iOS</Link>  </li>
              <li> <Link to='/#'>Linux</Link> </li>
              <li> <Link to='/#'>Erlang </Link> </li>
              <li> <Link to='/#'>San Francisco</Link>  </li>
              <li> <Link to='/#'>New York City</Link>  </li>
              <li> <Link to='/#'>Austin, Tx</Link>  </li>
              <li> <Link to='/#'>London</Link>  </li>
              <li> <Link to='/#'>Europe</Link>  </li>
            </ul>

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
  type: 'Full Time'
},
{
  id: 1,
  title: 'Senior Python Engenieer',
  location: 'Austion, TX/ Romote',
  crated_at: 'Fri Aug 14 18:50:13 UTC 2020',
  company: 'StepRock, Inc',
  type: 'Full Time'
}]