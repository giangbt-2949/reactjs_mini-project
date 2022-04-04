import './styles.scss';
import { sortByPrice, sortByDefaut } from '../../../redux/slices/productSlice';
import { useDispatch } from 'react-redux';

const SortPrice = () => {
  const dispatch = useDispatch();

  const handleSortPrice = (value) => {
    if(value === 'asc' || value === 'desc'){
      dispatch(sortByPrice(value));
      return;
    }

    dispatch(sortByDefaut());
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