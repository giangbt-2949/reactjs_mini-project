import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const CheckBox = ({ text, params }) => {
  const { state, dispatch } = useContext(ProductsContext);

  return (
    <div className="checkbox" onClick={() => {
      dispatch({type: 'GET_TYPE', payload: {params, text}});
    }}>
      <input type='checkbox' id={text}></input>
      <label for={text}>{text}</label>
    </div>
  )
};

export default CheckBox;
