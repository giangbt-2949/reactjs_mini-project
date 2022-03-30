import { useState, useContext } from 'react';
import './styles.scss';
import { ProductsContext } from '../../../ProductsContext';

const SideBarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const productContext = useContext(ProductsContext);

  if(item.childrens) {
    return (
      <div className="sidebar-wrapper" >
        <li className={isOpen ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          setIsOpen(prev => !prev);
          productContext.productDispatch({type: 'CATEGORY', payload: {categories_like: item.title}});
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
        <li className={isOpen ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => setIsOpen(prev => !prev)}>
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
      </div>
    )
  }
};

export default SideBarItem;
