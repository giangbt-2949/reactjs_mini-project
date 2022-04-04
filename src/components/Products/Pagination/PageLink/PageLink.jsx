import { useContext } from "react";
import { ProductsContext } from "../../../../ProductsContext";

const PageLink = ({ page }) => {
  const { state, dispatch } = useContext(ProductsContext);

  return (
    <li>
      <a onClick={() => {
        dispatch({type: 'CHANGE_PAGE', payload: page  });
      }} className={page === state.productParams._page ? "page-active" : ""}>{page}</a>
    </li>
  )
};

export default PageLink;