import Heading from "../Heading/Heading";
import { useSelector } from 'react-redux';
import CheckBox from "../CheckBox/CheckBox";
import './styles.scss';

const Types = () => {
  const { allProducts } = useSelector(state => state.products);

  const productTypes = [...new Set(allProducts.map(product => product.type))];

  return (
    <div className="types">
      <Heading text='Types'/>
      {productTypes && productTypes.map((type, index) => <CheckBox key={index} text={type} param='type' />)}
    </div>
  )
};

export default Types;