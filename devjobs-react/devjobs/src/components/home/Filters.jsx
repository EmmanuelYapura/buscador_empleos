import './Filters.css'

export function Filters() {
  return (
    <section className="filters">
      <h3>Filters</h3>
      <div className="group-select">
        <p>Technology</p>
        <select id="technology">
          <option value="">All technologies</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
          <option value="node">Node.js</option>
        </select>
      </div>
      <div className="group-select">
        <p>Location</p>
        <select id="location">
          <option value="">All locations</option>
          <option value="remote">Remote</option>
          <option value="ny">New York, NY</option>
          <option value="sf">San Francisco, CA</option>
          <option value="austin">Austin, TX</option>
        </select>
      </div>
      <div className="group-select">
        <p>Contract Type</p>
        <select id="contract">
          <option value="">All contract types</option>
          <option value="fulltime">Full-time</option>
          <option value="partime">Part-time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <button>Apply Filters</button>
    </section>
  );
}
