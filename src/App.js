import { useState, useReducer, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { ProductsContext } from "./ProductsContext";
import { productReducer } from './ProductsReducer';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [productParams, setProductParams] = useState({
    _page: currentPage,
    _limit: productsPerPage,
  });
  const [products, setProducts] = useState([]);
  const [currentLink, setCurrentLink] = useState('');

  const [params, dispatch] = useReducer(productReducer, productParams);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/products',
        {
          params: params
        }
      );
      const data = response.data;
      setProducts(data);
    };

    fetchData();
  }, [params]);

  console.log(products);
  
  console.log(params);
  return (
    <div className="App">
      <ProductsContext.Provider value={{
          params: params, 
          productDispatch: dispatch, 
          currentPage, 
          productsPerPage, 
          setCurrentPage, 
          products, 
          currentLink, 
          setCurrentLink,
        }}>
        <NavBar />
        <div className="d-flex mt-2">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Products products={products} />
          </div>
        </div>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
