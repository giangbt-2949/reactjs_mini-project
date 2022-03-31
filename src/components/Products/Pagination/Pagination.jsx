import { useContext, useState } from "react";
import { ProductsContext } from "../../../ProductsContext";

import './styles.scss';

const Pagination = () => {
  const productContext = useContext(ProductsContext);

  const handleNextPage = () => {
    productContext.state.page = productContext.state.page + 1;
    productContext.productDispatch({type: 'CHANGE_PAGE', payload: productContext.state.page})
  };

  const handlePrevPage = () => {
    if(productContext.state.page > 1) {
      productContext.state.page = productContext.state.page - 1;
      productContext.productDispatch({type: 'CHANGE_PAGE', payload: productContext.state.page})
    }
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <i class="fa-solid fa-chevron-left"></i>
          <a onClick={handlePrevPage}>Previous page</a>
        </li>
        {[...Array(productContext.state.page + 6).keys()].slice(productContext.state.page).map(page => (
          <li key={page}>
            <a onClick={() => {
              productContext.productDispatch({type: 'CHANGE_PAGE', payload: page  });
              productContext.state.page = page;
            }} className={page === productContext.state.page ? "page-active" : ""}>{page}</a>
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
