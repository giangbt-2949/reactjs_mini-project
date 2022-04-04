import './styles.scss';

const PriceLink = ({ text }) => {
  return (
    <div className="price-link">
      ${text}
    </div>
  )
};

export default PriceLink;