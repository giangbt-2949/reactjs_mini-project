import { useContext } from "react";
import Heading from "../Heading/Heading";
import './styles.scss';
import { ProductsContext } from "../../../ProductsContext";
import CheckBox from "../CheckBox/CheckBox";

const Brands = () => {
  const { state } = useContext(ProductsContext);

  const productBrands = [...new Set(state.allProducts.map(product => product.brand))];
  console.log(productBrands);

  return (
    <div className="brand">
      <Heading text='Brand' />
      {productBrands.map((brand, index) => <CheckBox text={brand} key={index} params='brand' />)}
    </div>  
  )
};

export default Brands;
