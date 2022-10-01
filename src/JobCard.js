import Modal from './Modal'; 
import { useState } from 'react';
import Job from './Job';
import { gql, useQuery } from '@apollo/client';

const LIST_APPLICATION = gql`
query ListApplications($where: ApplicationListWhereInput){
  listApplications(where: $where) {
    data {
      id
    }
  }
}
`

function JobCard({id, title, station, type, level, description}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const {data} = useQuery(LIST_APPLICATION, {
    context: {endpointType: 'read'},
    variables: {
      where: {ref: {id}}
    }
  })

  const noOfApplicants = data?.listApplications?.data.length

  return (
    <>
      <div className="jobCard">
        <div className="jobCard__details">
          <h2>{title}</h2>
          <div>
            <span className='dot'>{station}</span>
            <span className='jobCard__applicants'>
              {noOfApplicants || 0} appliacants
            </span>
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
          noOfApplicants={noOfApplicants}
          closeModal={() => setModalIsOpen(false)}
          id={id}
        />
      </Modal>
    </>
  )
}

export default JobCard