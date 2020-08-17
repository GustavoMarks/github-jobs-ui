import React, { useEffect, useState } from 'react';

import SearchForm from '../../components/SearchForm';
import FancySheet from '../../components/FancySheet';
import JobList from '../../components/JobsList';

import api from '../../services/api';

export default function Home() {

  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobsData = await api.get('/positions.json');
        setJobs(jobsData.data);
        setPage(page + 1);

      } catch (error) {
        console.log(error.response);
      }

      setLoaded(true);

    }

    async function fetchNextPage() {
      if (page !== 1) {
        try {
          const jobsData = await api.get(`/positions.json?page=${page}`);
          if (jobsData.data.length > 0) {
            const newJobs = jobs.concat(jobsData.data);
            setJobs(newJobs);
            setPage(page + 1);
          }

        } catch (error) {
          console.log(error);
        }
      }

    }

    async function watchScroll() {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        await fetchNextPage();
      }
    }

    fetchJobs();
    window.onscroll = watchScroll;
    // eslint-disable-netx-line
  }, [jobs, page])

  return (
    <div className='container' style={{ marginBottom: '80px' }} >
      <br />
      <SearchForm />
      <FancySheet>
        {loaded ? jobs.length > 0 ?
          <>
            <h3 className="section-title"> Jobs list </h3>
            <JobList list={jobs} />
          </> :
          <h3 className="section-title"> Nothing found </h3> : <h3 className="section-title"> Loading... </h3>}

      </FancySheet>
    </div>
  )
}