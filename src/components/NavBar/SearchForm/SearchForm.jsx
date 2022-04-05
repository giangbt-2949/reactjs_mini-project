import { useState, useRef } from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../../redux/slices/productSlice';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const timeOutRef = useRef(null);

  const dispatch = useDispatch();

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);

    if(timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    
    timeOutRef.current = setTimeout(() => {
      dispatch(searchByName(e.target.value));
      console.log(e.target.value);
    }, 500); 
  };

  return (
    <form className="search-input">
      <input type="text" value={searchTerm} onChange={handleSearchTerm}></input>
      <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
};

export default SearchForm;
