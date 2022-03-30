import { useState, useReducer } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { ProductsContext } from "./ProductsContext";
import { productReducer } from './ProductsReducer';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [productParams, setProductParams] = useState({
    _page: currentPage,
    _limit: productsPerPage,
  });

  const [api, dispatch] = useReducer(productReducer, productParams);

  return (
    <div className="App">
      <ProductsContext.Provider value={{params: api, productDispatch: dispatch, currentPage, productsPerPage, setCurrentPage}}>
        <NavBar />
        <div className="d-flex mt-2">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Products />
          </div>
        </div>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
