import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const CheckBox = ({ text, params }) => {
  const productContext = useContext(ProductsContext);

  return (
    <div className="checkbox" onClick={() => {
      productContext.state.page = 1;
      productContext.productDispatch({type: 'TYPE', payload: {[params]: text, _page: 1, _limit: productContext.state.limit}});
    }}>
      <input type='checkbox' id={text}></input>
      <label for={text}>{text}</label>
    </div>
  )
};

export default CheckBox;
