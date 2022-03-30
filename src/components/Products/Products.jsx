import { useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./Pagination/Pagination";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/products',
        {
          params: {
            _page: currentPage,
            _limit: productsPerPage,
          }
        }
      );
      const data = response.data;
      setProducts(data);
      setTotalProducts(response.headers['x-total-count']);
    };

    fetchData();
  }, [currentPage]);

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
