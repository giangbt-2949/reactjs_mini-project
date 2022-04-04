import { useReducer, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import SideBar from "./components/SideBar/SideBar";
import { ProductsContext } from "./ProductsContext";
import { productReducer } from './ProductsReducer';
import axios from 'axios';

function App() {
  const initialState = {
    products: [],
    allProducts: [],
    productParams: {
      _page: 1,
      _limit: 16
    },
    currentLink: '',
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const { data} = await axios.get('http://localhost:3000/products',
        {
          params: state.productParams
        }
      );
      
      dispatch({ type: 'GET_PRODUCTS', payload: data });
    };

    const fetchAllProducts = async () => {
      const { data } = await axios.get('http://localhost:3000/products',
        {
          params: {
            categories_like: state.productParams.categories_like,
            _page: state.productParams._page,
            _limit: state.productParams._limit,
          }
        }
      );

      dispatch({ type: 'GET_ALL_PRODUCTS', payload: data });
    };

    fetchData();
    fetchAllProducts();
  }, [state.productParams]);
  
  console.log(state);
  return (
    <div className="App">
      <ProductsContext.Provider value={{
          dispatch, 
          state,
        }}>
        <NavBar />
        <div className="d-flex mt-2">
          <div className="col-md-2 overflow-scroll">
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
