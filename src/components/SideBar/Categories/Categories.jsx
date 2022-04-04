import Heading from "../Heading/Heading";
import { categories } from '../../../data/categories';
import SideBarItem from "../SideBar_Item/SideBarItem";

const Categories = () => {
  return (
    <div>
      {categories.map(category => <SideBarItem item={category} />)}
    </div>
  )
};

export default Categories;