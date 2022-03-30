import Rating from './Rating/Rating';
import './styles.scss';

const Product = ({ image, name, rating, price }) => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img src={image}></img>
      </div>
      <h6 className="product-card__name">{name}</h6>
      <div className="product-card__info">
        <Rating rating={rating} />
        <h5>${price}</h5>
      </div>
    </div>
  )
};

export default Product;
