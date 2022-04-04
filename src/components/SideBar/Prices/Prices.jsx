import { useContext } from "react";
import Heading from "../Heading/Heading";
import PriceLink from "./PriceLink/PriceLink";
import './styles.scss';
import { ProductsContext } from "../../../ProductsContext";

const Prices = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const productPrices = [...new Set(state.allProducts.map(product => product.price_range))];

  const sortPriceRange = (arr) => {
    const newArr = arr.map(item => item.split(' '));

    return newArr.sort((a, b) => a[0] - b[0]).map(item => item.join(' '));
  };

  console.log(sortPriceRange(productPrices));

  return (
    <div className="prices">
      <Heading text='Prices'/>
      {sortPriceRange(productPrices).map((price, index) => <div onClick={() => dispatch({type: 'GET_PRICES', payload: price})}><PriceLink text={price} key={index} /></div>)}
    </div>
  )
};

export default Prices;