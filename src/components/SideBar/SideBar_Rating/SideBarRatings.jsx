import { useContext } from "react";
import Rating from "../../Products/Product/Rating/Rating";
import Heading from "../Heading/Heading";
import './styles.scss';
import { ProductsContext } from "../../../ProductsContext";

const SideBarRating = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleFilterRatings = (rating) => {
    const filterRating = state.products.filter(product => product.rating > rating);

    console.log(filterRating);
    dispatch({ type: 'GET_RATINGS', payload: {rating_gte: rating}});
  };

  return (
    <div className="sidebar-ratings">
      <Heading text='Ratings'/>
      {[...Array(5)].map((_, index) => index > 0 ? <div onClick={() => handleFilterRatings(index)}><Rating rating={index} /> <span>& Up</span></div> : null)}
    </div>
  )
};

export default SideBarRating;
