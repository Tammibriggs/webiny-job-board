import './styles.css';
import Hero from './Hero';
import { useState } from 'react';
import JobCard from './JobCard';
import { gql, useQuery } from '@apollo/client';

const LIST_JOBS = gql`
{
  listJobs {
    data {
      id
      title
      description
      type
      station
      level
    }
  }
}
`

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [jobLevel, setJobLevel] = useState([])
  const [jobType, setJobType] = useState([])
  const [jobStation, setJobStation] = useState([])
  const {data, loading} = useQuery(LIST_JOBS)

  return (
    <div className="app">
      <Hero 
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
        jobLevel={jobLevel}
        setJobLevel={setJobLevel}
        jobStation={jobStation}
        setJobStation={setJobStation}
        jobType={jobType}
        setJobType={setJobType}
      />
      <div className='jobs wrapper'>
        {data?.listJobs?.data.map((job) => (
          <JobCard 
            title={job.title}
            station={job.station}
            type={job.type}
            level={job.level}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
