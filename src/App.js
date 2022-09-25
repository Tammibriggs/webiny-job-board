import './styles.css';
import Hero from './Hero';
import { useState } from 'react';
import JobCard from './JobCard';

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [jobLevel, setJobLevel] = useState([])
  const [jobType, setJobType] = useState([])
  const [jobStation, setJobStation] = useState([])

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
        <JobCard />
      </div>
    </div>
  );
}

export default App;
