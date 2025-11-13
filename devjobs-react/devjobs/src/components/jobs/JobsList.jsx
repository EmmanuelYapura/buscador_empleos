import './JobsList.css'
import { JobCard } from "./JobCard.jsx";
import Pagination from './Pagination.jsx';

export function JobsList() {
  const jobs = [
    {
      id: 0,
      title: "Senior Software Engineer",
      company: "Tech innovators Inc.",
      location: "Remote",
      data: {
        modalidad: "remote",
      },
    },
    {
      id: 1,
      title: "Frontend Developer",
      company: "Digital Solutions Co.",
      location: "New York, NY",
      data: {
        modalidad: "ny",
      },
    },
    {
      id:2,
      title: "Backend Enginner",
      company: "Cloud Services Ltd.",
      location: "San Francisco, CA",
      data: {
        modalidad: "sf",
      },
    },
    {
      id:3,
      title: "Full Stack Developer",
      company: "Web Dynamics LLC",
      location: "Austin, TX",
      data: {
        modalidad: "austin",
      },
    }
  ];
  return (
    <section className="job-listing">
        {
            jobs?.map( job => (
              <JobCard key={job.id} job={job}/>
            ))
        }
        <Pagination />
    </section>
    );
}
