import { FaStar } from 'react-icons/fa';
import './styles.scss';

const Rating = ({ rating }) => {
  if(rating > 5) {
    return (
      <div className="rating">
      {[...Array(rating)].map(star => {
        return <FaStar className='yellow-star' />
      })}
    </div>
    )
  }

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => index < rating ? <FaStar className='yellow-star' /> : <FaStar className='white-star' />)}
    </div>
  )
};

export default Rating;
