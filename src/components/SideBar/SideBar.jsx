import { useContext } from "react";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";

import './styles.scss';
import Types from "./Types/Types";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Categories />
      <Types />
      <Brands />
    </div>
  )
};

export default SideBar;
