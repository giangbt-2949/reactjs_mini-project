import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, setCurrentLink } from '../../../redux/slices/productSlice';
import './styles.scss';

const SideBarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentLink } = useSelector(state => state.products);
  const dispatch = useDispatch();

<<<<<<< HEAD
  const handleSideBarItem = () => {
    setIsOpen(!isOpen);
    dispatch(filterByCategory(item.title));
    dispatch(setCurrentLink(item.title));
  };

  if(item.childrens) {
    return (
      <a className="sidebar-wrapper" >
        <li className={currentLink === item.title ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={handleSideBarItem}>
=======
  if(item.childrens) {
    return (
      <a className="sidebar-wrapper" >
        <li className={currentLink === item.title ? "sidebar-item sidebar-active" : "sidebar-item"}  onClick={() => {
          setIsOpen(!isOpen);
          dispatch(filterByCategory(item.title));
          dispatch(setCurrentLink(item.title));
        }}>
>>>>>>> 0b88355c5e30a31a22c6c653dfcc9639ca4528b2
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
<<<<<<< HEAD
        <li className={currentLink === item.title ? "sidebar-item sidebar-active" : "sidebar-item"} onClick={handleSideBarItem}>
=======
        <li className={currentLink === item.title ? "sidebar-item sidebar-active" : "sidebar-item"} onClick={() => {
          dispatch(filterByCategory(item.title));
          dispatch(setCurrentLink(item.title));
        }}>
>>>>>>> 0b88355c5e30a31a22c6c653dfcc9639ca4528b2
          <i class="fa-solid fa-chevron-right"></i>
          <span>{item.title}</span>
        </li>
      </a>
    )
  }
};

export default SideBarItem;
