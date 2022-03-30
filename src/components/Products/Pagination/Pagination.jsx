import { useState } from "react";

import './styles.scss';

const Pagination = ({ setCurrentPage, currentPage }) => {
  const [limitPageNum, setLimitPageNum] = useState(6);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <i class="fa-solid fa-chevron-left"></i>
          <a onClick={handlePrevPage}>Previous page</a>
        </li>
        {[...Array(currentPage + limitPageNum).keys()].slice(currentPage).map(page => (
          <li key={page}>
            <a onClick={() => setCurrentPage(page)} className={page === currentPage ? "page-active" : ""}>{page}</a>
          </li>
        ))}
        <li>
          <a onClick={handleNextPage}>Next page</a>
          <i class="fa-solid fa-chevron-right"></i>
        </li>
      </ul>
    </nav>
  )
};  

export default Pagination;
