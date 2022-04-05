import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('products/getProducts', async (params) => {
  const { data } = await axios.get('http://localhost:3000/products',
    {
      params
    }
  );

  return data;
});

export const getAllProducts = createAsyncThunk('allProducts/getAllProducts', async (params) => {
  const { data } = await axios.get('http://localhost:3000/products',
    {
      params: {
        categories_like: params.categories_like,
        _page: params._page,
        _limit: params._limit,
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
      type: [],
      brand: [],
    },
    products: [],
    allProducts: [],
    currentLink: '',
    isLoading: false,
    errorMess: '',
  },
  reducers: {
    changePage: (state, action) => {
      state.productParams = {
        ...state.productParams,
        _page: action.payload
      };
    },

    filterByCategory: (state, action) => {
      state.productParams = {
        categories_like: action.payload,
        _page: 1,
        _limit: 16,
        type: [],
        brand: [],
      }
    },

    filterByType: (state, action) => {
      state.productParams[action.payload.param].push(action.payload.text);
    },

    filterByRating: (state, action) => {
      state.productParams = {
        ...state.productParams,
        _page: 1,
        rating_gte: action.payload,
      }
    },

    filterByPrice: (state, action) => {
      state.productParams = {
        ...state.productParams,
        price_range: action.payload,
      }
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
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
      state.errorMess = 'Products not found!'
    },
    [getProducts.fulfilled]: (state, action) => {
      state.errorMess = '';
      state.isLoading = false;
      state.products = action.payload;
    },

    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
      state.errorMess = 'Products not found!'
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.errorMess = '';
      state.isLoading = false;
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
