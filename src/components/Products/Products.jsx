import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Pagination from "./Pagination/Pagination";
import Product from "./Product/Product";
import { setProducts, setAllProducts } from "../../redux/slices/productSlice";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { products, productParams } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3000/products',
        {
          params: productParams
        }
      );
      
      dispatch(setProducts(data));
    };

    const fetchAllProducts = async () => {
      const { data } = await axios.get('http://localhost:3000/products',
      {
        params: {
          categories_like: productParams.categories_like,
          _page: productParams._page,
          _limit: productParams._limit,
        }
      }
    );

    dispatch(setAllProducts(data));
    };

    fetchData();
    fetchAllProducts();
  }, [productParams]);

  console.log(products);

  return (
    <div>
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
