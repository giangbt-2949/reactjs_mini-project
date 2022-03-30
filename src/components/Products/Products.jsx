import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import Pagination from "./Pagination/Pagination";
import Product from "./Product/Product";
import { ProductsContext } from "../../ProductsContext";

const Products = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productContext = useContext(ProductsContext);

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
