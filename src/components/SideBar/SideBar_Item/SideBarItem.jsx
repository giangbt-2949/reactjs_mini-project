import { useState, useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SideBarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(ProductsContext);

  if(item.childrens) {
    return (
      <a className="sidebar-wrapper" >
        <li className={item.title === state.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          setIsOpen(true);
          dispatch({type: 'CHANGE_CURRENT_LINK', payload: item.title})
          dispatch({type: 'GET_CATEGORY', payload: {categories_like: item.title, _page: 1, _limit: state.productParams._limit}});
        }}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
        <ul className={isOpen ? 'sub-sidebar open' : 'sub-sidebar'}>
          {item.childrens.map((item, index) => <SideBarItem item={item} key={index} />)}
        </ul>
      </a>
    )
  } else {
    return (
      <a className="sidebar-wrapper" >
        <li className={item.title === state.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          dispatch({type: 'CHANGE_CURRENT_LINK', payload: item.title})
          dispatch({type: 'GET_CATEGORY', payload: {categories_like: item.title, _page: 1, _limit: state.productParams._limit}});
        }}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
      </a>
    )
  }
};

export default SideBarItem;
