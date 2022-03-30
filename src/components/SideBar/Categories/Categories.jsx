import SideBarItem from "../SideBar_Item/SideBarItem";
import { categories } from "../../../data/categories";

const Categories = () => {
  console.log(categories);

  return (
    <nav>
      {categories.map((item, index) => <SideBarItem item={item} key={index} />)}
    </nav>
  )
};

export default Categories;
