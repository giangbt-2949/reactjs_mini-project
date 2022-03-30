import logo from '../../assets/images/logo-is.png';
import SearchForm from './SearchForm/SearchForm';
import './styles.scss';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__img">
        <img src={logo}></img>  
      </div>
      <h3>amazing</h3>
      <SearchForm />
    </nav>
  )
};

export default NavBar;
