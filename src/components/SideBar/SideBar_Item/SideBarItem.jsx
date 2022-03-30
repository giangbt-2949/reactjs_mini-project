import { useState, useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SideBarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState('');
  const productContext = useContext(ProductsContext);

  if(item.childrens) {
    return (
      <div className="sidebar-wrapper" >
        <li className={item.title === productContext.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          setIsOpen(true);
          productContext.setCurrentLink(prev => prev = item.title);
          productContext.productDispatch({type: 'CATEGORY', payload: {categories_like: item.title, _page: productContext.currentPage, _limit: productContext.productsPerPage}});
        }}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
        <ul className={isOpen ? 'sub-sidebar open' : 'sub-sidebar'}>
          {item.childrens.map((item, index) => <SideBarItem item={item} key={index} />)}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="sidebar-wrapper" >
        <li className={item.title === productContext.currentLink ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          productContext.setCurrentLink(prev => prev = item.title);
          productContext.productDispatch({type: 'CATEGORY', payload: {categories_like: item.title, _page: productContext.currentPage, _limit: productContext.productsPerPage}});
        }}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
      </div>
    )
  }
};

export default SideBarItem;
