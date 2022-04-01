import { useContext } from "react";
import { ProductsContext } from "../../../ProductsContext";
import PageLink from "./PageLink/PageLink";

import './styles.scss';

const Pagination = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleNextPage = () => {
    dispatch({type: 'CHANGE_PAGE', payload: state.productParams._page + 1})
  };

  const handlePrevPage = () => {
    if(state.productParams._page > 1) {
      dispatch({type: 'CHANGE_PAGE', payload: state.productParams._page - 1})
    }
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <i class="fa-solid fa-chevron-left"></i>
          <a onClick={handlePrevPage}>Previous page</a>
        </li>
        {[...Array(state.productParams._page + 6).keys()].slice(state.productParams._page).map(page => (
          <PageLink page={page} key={page} />
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
