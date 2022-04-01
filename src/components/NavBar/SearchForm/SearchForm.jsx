import { useContext, useRef, useState } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const timeOutRef = useRef(null);
  const { state, dispatch } = useContext(ProductsContext);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);

    if(timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    
    timeOutRef.current = setTimeout(() => {
      dispatch({type: 'SEARCH_BY_NAME', payload: e.target.value});
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
