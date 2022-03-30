import { useState } from 'react';
import './styles.scss';

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className="search-input">
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
      <button type='button'><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
};

export default SearchForm;
