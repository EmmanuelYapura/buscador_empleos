import { JobsList } from "../jobs/JobsList.jsx" 
import { Filters } from "./Filters.jsx"
import './SearchComponent.css'
import { SearchResults } from "../SearchResults.jsx"
import { getJobs } from "../../services/getJobs.js"
import { useEffect, useState } from "react"

function SearchComponent(){

    const [jobs, setJobs] = useState([])
    const [allJobs, setAllJobs] = useState([])
    const [filters, setFilters] = useState("")

    useEffect( () => {
        getJobs().then( data => {
            setJobs(data) 
            setAllJobs(data)
        })
    }, [])

    useEffect( () => {
        if(!filters){
            setJobs(allJobs)
            return
        }

        const jobsFilter = allJobs.filter( job => job.data.modalidad == filters)
        setJobs(jobsFilter)

    }, [filters, allJobs])

    return(
        <section>
            <Filters onChangeFilter={setFilters} />
            <div className="asd">
                <SearchResults location={filters}/>
                <JobsList jobs={jobs}/>
            </div>
        </section>
    )
}

export default SearchComponent