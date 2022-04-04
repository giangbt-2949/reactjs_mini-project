import Rating from "../../Products/Product/Rating/Rating";
import Heading from "../Heading/Heading";
import { useDispatch } from 'react-redux';
import { filterByRating } from "../../../redux/slices/productSlice";

import './styles.scss';

const SideBarRating = () => {
  const dispatch = useDispatch();

  const handleFilterRatings = (rating) => {
    dispatch(filterByRating(rating));
  };

  return (
    <div className="sidebar-ratings">
      <Heading text='Ratings'/>
      {[...Array(5)].map((_, index) => index > 0 ? <div onClick={() => handleFilterRatings(index)}><Rating rating={index} /> <span>& Up</span></div> : null)}
    </div>
  )
};

export default SideBarRating;