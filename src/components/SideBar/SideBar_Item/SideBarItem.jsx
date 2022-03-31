import { useState, useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SideBarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productContext = useContext(ProductsContext);

  if(item.childrens) {
    return (
      <a className="sidebar-wrapper" >
        <li className={item.title === productContext.state.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          setIsOpen(true);
          productContext.state.currentLink = item.title;
          productContext.state.page = 1;
          productContext.productDispatch({type: 'CATEGORY', payload: {categories_like: item.title, _page: 1, _limit: productContext.state.limit}});
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
        <li className={item.title === productContext.state.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          productContext.state.currentLink = item.title;
          productContext.state.page = 1;
          productContext.productDispatch({type: 'CATEGORY', payload: {categories_like: item.title, _page: 1, _limit: productContext.state.limit}});
        }}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
      </a>
    )
  }
};

export default SideBarItem;
