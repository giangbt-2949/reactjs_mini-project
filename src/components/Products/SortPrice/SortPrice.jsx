import { useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SortPrice = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleSortPrice = (value) => {
    if(value === 'asc' || value === 'desc'){
      dispatch({type: 'SORT_PRICE_ASC', payload: value});
      return;
    }

    dispatch({type: 'GET_FEATURED'})
  };

  return (
    <div className='sort-price'>
      <label>Sort by</label>
      <select onChange={(e) => handleSortPrice(e.target.value)}>
        <option value='featured'>Featured</option>
        <option value='asc'>Price asc</option>
        <option value='desc'>Price desc</option>
      </select>
    </div>
  )
};

export default SortPrice;
