import './JobsList.css'
import { JobCard } from "./JobCard.jsx";
import Pagination from './Pagination.jsx';
import { useState } from 'react';

const RESULST_PER_PAGE = 4

export function JobsList( {jobs} ) {
  const [currentPage, setCurrentPage] = useState(1)
  let totalPages = Math.ceil(jobs.length / RESULST_PER_PAGE)

  const pagedResults = jobs.slice(
    (currentPage - 1) * RESULST_PER_PAGE,
    currentPage * RESULST_PER_PAGE
  )

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  return (
    <section className="job-listing">
        {
            pagedResults?.map( (job) => (
              <JobCard key={job.id} job={job}/>
            ))
        }
        <Pagination currentPage={currentPage} totalPages={totalPages} onChangePage={handlePageChange}/>
    </section>
    );
}
