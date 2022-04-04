import SideBarItem from "../SideBar_Item/SideBarItem";
import { categories } from "../../../data/categories";
import './styles.scss';

const Categories = () => {
  return (
    <nav className="categories">
      {categories.map((item, index) => <SideBarItem item={item} key={index} />)}
    </nav>
  )
};

export default Categories;
