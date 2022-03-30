import { useContext } from "react";
import queryString from 'query-string';
import Categories from "./Categories/Categories";

import './styles.scss';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Categories />
    </div>
  )
};

export default SideBar;
