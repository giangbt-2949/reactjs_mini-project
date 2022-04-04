import { useSelector, useDispatch } from 'react-redux';
import Heading from '../Heading/Heading';
import PriceLink from './PriceLink/PriceLink';
import { filterByPrice } from '../../../redux/slices/productSlice';

import './styles.scss';

const Prices = () => {
  const { allProducts } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const productPrices = [...new Set(allProducts.map(product => product.price_range))];

  const sortPriceRange = (arr) => {
    const newArr = arr.map(item => item.split(' '));

    return newArr.sort((a, b) => a[0] - b[0]).map(item => item.join(' '));
  };

  return (
    <div className="prices">
      <Heading text='Prices'/>
      {sortPriceRange(productPrices).map((price, index) => <div onClick={() => dispatch(filterByPrice(price))}><PriceLink text={price} key={index} /></div>)}
    </div>
  )
};

export default Prices;