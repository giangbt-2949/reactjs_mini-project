import { useState, useReducer, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { ProductsContext } from "./ProductsContext";
import { productReducer } from './ProductsReducer';
import axios from 'axios';

function App() {
  const initialState = {
    products: [],
    page: 1,
    limit: 16,
    productParams: {
      _page: 1,
      _limit: 16
    },
    currentLink: '',
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/products',
        {
          params: state.productParams
        }
      );
      const data = response.data;
      dispatch({ type: 'GET_PRODUCTS', payload: data});
    };

    fetchData();
  }, [state.productParams]);
  
  console.log(state);
  return (
    <div className="App">
      <ProductsContext.Provider value={{
          productDispatch: dispatch, 
          state: state,
        }}>
        <NavBar />
        <div className="d-flex mt-2">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Products products={state.products} />
          </div>
        </div>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
