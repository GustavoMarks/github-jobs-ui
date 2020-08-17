import React, { useEffect, useState } from 'react';

import SearchForm from '../../components/SearchForm';
import FancySheet from '../../components/FancySheet';
import JobList from '../../components/JobsList';

import api from '../../services/api';

export default function Home() {

  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobsData = await api.get('/positions.json');
        setJobs(jobsData.data);
        setLoaded(true);

      } catch (error) {
        console.log(error);
      }

    }

    fetchJobs();
  }, [])

  return (
    <div className='container' style={{ marginBottom: '80px' }} >
      <br />
      <SearchForm />
      <FancySheet>
        {loaded ? jobs.length > 0 ?
          <>
            <h3 className="section-title"> Showing 1 - 50 of 113 </h3>
            <JobList list={jobs} />
          </> :
          <h3 className="section-title"> Nothing found </h3> : <h3 className="section-title"> Loadding... </h3>}

      </FancySheet>
    </div>
  )
}