import "./Pagination.css";

function Pagination({ currentPage = 1, totalPages = 10, onChangePage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = (event) => {
    event.preventDefault()
    if(!isFirstPage){
      onChangePage(currentPage - 1)
    }
  }

  const handleNextClick = (event) => {
    event.preventDefault()
    if(!isLastPage){
      onChangePage(currentPage + 1)
    }
  }

  const handleChangePage = (event, page) => {
    event.preventDefault()
    onChangePage(page)
  }

  return (
    <nav className="pagination">
      {!isFirstPage && (
        <a onClick={handlePrevClick} href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </a>
      )}

      {pages.map(page => (
        <a
          onClick={(event) => handleChangePage(event, page)}
          key={page}
          href="#"
          className={currentPage == page ? "is-active" : ""}
        >
          {page}
        </a>
      ))}

      {!isLastPage && (
        <a onClick={handleNextClick} href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      )}
    </nav>
  );
}

export default Pagination;
