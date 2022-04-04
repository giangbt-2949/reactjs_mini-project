import { createSlice } from '@reduxjs/toolkit';

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

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
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
    }
  }
});

export const { 
  changePage, 
  setProducts, 
  filterByCategory, 
  setCurrentLink, 
  setAllProducts, 
  filterByType, 
  filterByRating, 
  filterByPrice 
} = productSlice.actions;

export default productSlice.reducer;
