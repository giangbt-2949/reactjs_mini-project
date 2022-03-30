import { useContext, useState } from "react";
import { ProductsContext } from "../../../ProductsContext";

import './styles.scss';

const Pagination = () => {
  const [limitPageNum, setLimitPageNum] = useState(6);
  const productContext = useContext(ProductsContext);

  const handleNextPage = () => {
    productContext.setCurrentPage(prevPage => prevPage + 1);
    productContext.productDispatch({type: 'CHANGE_PAGE', payload: productContext.currentPage + 1})
  };

  const handlePrevPage = () => {
    productContext.setCurrentPage(prevPage => prevPage - 1);
    productContext.productDispatch({type: 'CHANGE_PAGE', payload: productContext.currentPage - 1})
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <i class="fa-solid fa-chevron-left"></i>
          <a onClick={handlePrevPage}>Previous page</a>
        </li>
        {[...Array(productContext.currentPage + limitPageNum).keys()].slice(productContext.currentPage).map(page => (
          <li key={page}>
            <a onClick={() => {
              productContext.productDispatch({type: 'CHANGE_PAGE', payload: page  });
              productContext.setCurrentPage(page);
            }} className={page === productContext.currentPage ? "page-active" : ""}>{page}</a>
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
