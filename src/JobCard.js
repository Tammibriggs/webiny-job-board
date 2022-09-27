import Modal from './Modal'; 
import { useState } from 'react';
import Job from './Job';

function JobCard({
  title='JavaScript Developer', 
  station='Remote',
  type='Full-time',
  level='Entry-level',
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin nulla turpis, ac convallis ligula euismod ut. Sed volutpat ac ligula a consectetur. Aenean ultrices finibus tellus, sit amet aliquet orci',
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <div className="jobCard">
        <div className="jobCard__details">
          <h2>{title}</h2>
          <div>
            <span className='dot'>{station}</span>
            <span className='jobCard__applicants'>0 appliacants</span>
          </div>

          <div>
            <img src="/briefcase.png" alt="briefcase"/>
            <span className="dot">{type}</span>
            <span>{level}</span>
          </div>
        </div>
        <button onClick={() => setModalIsOpen(true)}>Apply &rarr;</button>
      </div>

      <Modal 
        open={modalIsOpen} 
        onClose={() => setModalIsOpen(false)}
        modalLable={title}
        customBlackDrop='backdrop'>
        <Job 
          station={station}
          type={type}
          level={level}
          description={description}
        />
      </Modal>
    </>
  )
}

export default JobCard