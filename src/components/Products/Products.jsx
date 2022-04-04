import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Pagination from "./Pagination/Pagination";
import Product from "./Product/Product";
import { getAllProducts, getProducts } from "../../redux/slices/productSlice";
import SortPrice from "./SortPrice/SortPrice";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { products, productParams } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productParams));
    dispatch(getAllProducts(productParams));
  }, [productParams]);

  console.log(products);

  return (
    <div>
      <SortPrice />
      <div className="d-flex flex-wrap">
        {products && products.map(product => (
          <div className="col-md-3" key={product.objectID} >
            <Product {...product} />
          </div>
        ))}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
};

export default Products;
