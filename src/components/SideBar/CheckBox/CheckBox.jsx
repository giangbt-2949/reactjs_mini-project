import { useDispatch } from 'react-redux';
import { filterByType } from '../../../redux/slices/productSlice';
import './styles.scss';

const CheckBox = ({ text, param }) => {
  const dispatch = useDispatch();

  return (
    <div className="checkbox" onClick={() => {
      dispatch(filterByType({ param, text }))
    }}>
      <input type='checkbox' id={text}></input>
      <label for={text}>{text}</label>
    </div>
  )
};

export default CheckBox;
