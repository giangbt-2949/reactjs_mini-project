import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const CheckBox = ({ text, params }) => {
  const productContext = useContext(ProductsContext);

  console.log(params);

  return (
    <div className="checkbox" onClick={() => productContext.productDispatch({type: 'TYPE', payload: {[params]: text, _page: productContext.currentPage, _limit: productContext.productsPerPage}})}>
      <input type='checkbox' id={text}></input>
      <label for={text}>{text}</label>
    </div>
  )
};

export default CheckBox;
