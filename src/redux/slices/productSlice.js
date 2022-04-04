import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (productParams) => {
  const { data } = await axios.get('http://localhost:3000/products',
    {
      params: productParams
    }
  );

  console.log(productParams);
  return data;
});

export const getAllProducts = createAsyncThunk('allProducts/getAllProducts', async (productParams) => {
  const { data } = await axios.get('http://localhost:3000/products',
    {
      params: {
        categories_like: productParams.categories_like,
        _page: productParams._page,
        _limit: productParams._limit,
      }
    }
  );

  return data
});

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    productParams: {
      _page: 1,
      _limit: 16,
    },
    products: [],
    allProducts: [],
    currentLink: ''
  },
  reducers: {
    changePage: (state, action) => {
      state.productParams = {
        ...state.productParams,
        _page: action.payload
      };
      console.log(state.productParams);
    },

    filterByCategory: (state, action) => {
      state.productParams = {
        categories_like: action.payload,
        _page: 1,
        _limit: 16
      }
      console.log(state.productParams);
    },

    filterByType: (state, action) => {
      if(state.productParams[action.payload.param]) {
        state.productParams = {
          ...state.productParams,
          _page: 1,
          [action.payload.param]: [...state.productParams[action.payload.param] ,action.payload.text],
        }
      } else {
        state.productParams = {
          ...state.productParams,
          _page: 1,
          [action.payload.param]: [action.payload.text],
        }
      }
      console.log(state.productParams);
    },

    filterByRating: (state, action) => {
      state.productParams = {
        ...state.productParams,
        _page: 1,
        rating_gte: action.payload,
      }
      console.log(state.productParams);
    },

    filterByPrice: (state, action) => {
      state.productParams = {
        ...state.productParams,
        price_range: action.payload,
      }
      console.log(state.productParams);
    },

    setCurrentLink: (state, action) => {
      state.currentLink = action.payload;
    },

    sortByPrice: (state, action) => {
      state.productParams = {
        ...state.productParams,
        _sort: 'price',
        _order: action.payload,
      }
    },

    sortByDefaut: (state) => {
      state.productParams = {
        ...state.productParams,
        _sort: '',
        _order: '',
      }
    },

    searchByName: (state, action) => {
      state.productParams = {
        _page: 1,
        _limit: 16,
        name_like: action.payload,
      }
    },

  }, 
  extraReducers: {
    [getProducts.pending]: (state, action) => {},
    [getProducts.rejected]: (state, action) => {},
    [getProducts.fulfilled]: (state, action) => {
      console.log('products',action.payload);
      state.products = action.payload;
    },

    [getAllProducts.pending]: (state, action) => {},
    [getAllProducts.rejected]: (state, action) => {},
    [getAllProducts.fulfilled]: (state, action) => {
      console.log('allProducts',action.payload);
      state.allProducts = action.payload;
    },
  }
});

export const { 
  changePage, 
  filterByCategory, 
  setCurrentLink, 
  setAllProducts, 
  filterByType, 
  filterByRating, 
  filterByPrice,
  sortByPrice, 
  sortByDefaut,
  searchByName,
} = productSlice.actions;

export default productSlice.reducer;
