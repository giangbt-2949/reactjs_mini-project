import { useContext } from "react";
import CheckBox from "../CheckBox/CheckBox";
import Heading from "../Heading/Heading";
import './styles.scss';
import { types } from '../../../data/types';
import { ProductsContext } from "../../../ProductsContext";

const Types = () => {
  const { state } = useContext(ProductsContext);

  const productTypes = [...new Set(state.allProducts.map(product => product.type))];

  return (
    <div className="types">
      <Heading text='Type' />
      {productTypes.map((type, index) => <CheckBox text={type} key={index} params='type' />)}
    </div>
  )
};

export default Types;
