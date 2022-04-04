import Heading from "../Heading/Heading";
import { useSelector } from 'react-redux';
import CheckBox from "../CheckBox/CheckBox";
import './styles.scss';

const Brands = () => {
  const { allProducts } = useSelector(state => state.products);

  const productBrands = [...new Set(allProducts.map(product => product.brand))];

  return (
    <div className="brand">
      <Heading text='Brands'/>
      {productBrands && productBrands.map((type, index) => <CheckBox key={index} text={type} param='brand' />)}
    </div>
  )
};

export default Brands;
