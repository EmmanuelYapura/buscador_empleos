import { JobsList } from "../jobs/JobsList.jsx" 
import { Filters } from "./Filters.jsx"
import './SearchComponent.css'
import { SearchResults } from "../SearchResults.jsx"

function SearchComponent(){
    return(
        <section>
            <Filters />
            <div className="asd">
                <SearchResults/>
                <JobsList />
            </div>
        </section>
    )
}

export default SearchComponent