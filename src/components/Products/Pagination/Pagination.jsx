import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from "../../../redux/slices/productSlice";

import './styles.scss';

const Pagination = () => {
  const [limitPageNum, setLimitPageNum] = useState(6);

  const { productParams } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(changePage(productParams._page + 1));
  };

  const handlePrevPage = () => {
    if (productParams._page > 1) {
      dispatch(changePage(productParams._page - 1));
    }
  };

  return (
    <nav className="pagination">
      <ul>
        <li>
          <i class="fa-solid fa-chevron-left"></i>
          <a onClick={handlePrevPage}>Previous page</a>
        </li>
        {[...Array(productParams._page + limitPageNum).keys()].slice(productParams._page).map(page => (
          <li key={page}>
            <a onClick={() => {
              dispatch(changePage(page));
            }} className={page === productParams._page ? "page-active" : ""}>{page}</a>
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
