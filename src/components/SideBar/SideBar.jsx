import { useContext } from "react";
import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import Prices from "./Prices/Prices";
import SideBarRating from "./SideBar_Rating/SideBarRatings";

import './styles.scss';
import Types from "./Types/Types";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Categories />
      <Types />
      <Brands />
      <SideBarRating />
      <Prices />
    </div>
  )
};

export default SideBar;
