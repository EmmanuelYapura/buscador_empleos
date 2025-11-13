import '../styles/SearchResults.css'

export function SearchResults() {
  return (
    <section className="search-results">
      <header>
        <div>
          <h1>Search Results</h1>
          <p>showing 1-20 of 1,234 jobs</p>
        </div>
        <div className="filters-values">
          <p>
            Technology:<span> All</span>
          </p>
          <p>
            Location:<span> All</span>
          </p>
          <p>
            Contract:<span> All</span>
          </p>
        </div>
      </header>
      <div className="sort-by">
        <h4>Sort By</h4>
        <input
          type="radio"
          /* checked */
          name="sort-by"
          value="relevance"
          id="sb-relevance"
        />
        <label htmlFor="sb-relevance">Relevance</label>
        <input type="radio" name="sort-by" value="date" id="date" />
        <label htmlFor="sb-date">Date</label>
        <input type="radio" name="sort-by" value="salary" id="salary" />
        <label htmlFor="sb-salary">Salary</label>
      </div>
    </section>
  );
}
