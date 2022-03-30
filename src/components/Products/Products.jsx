import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./Pagination/Pagination";
import Product from "./Product/Product";
import { ProductsContext } from "../../ProductsContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const productContext = useContext(ProductsContext);

  console.log(productContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/products',
        {
          params: productContext.params
        }
      );
      const data = response.data;
      setProducts(data);
      setTotalProducts(response.headers['x-total-count']);
    };

    fetchData();
  }, [productContext]);

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
