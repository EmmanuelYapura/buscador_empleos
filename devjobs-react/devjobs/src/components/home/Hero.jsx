import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Encuentra tu proximo trabajo de desarrollo</h1>
      <p>
        Explora miles de oportunidades en empresas innovadoras. Tu carrera en
        tecnologia comienza aqui.
      </p>
      <form role="search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <input
          type="text"
          placeholder="Buscar empleos, empresas o habilidades"
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
}

export default Hero;
