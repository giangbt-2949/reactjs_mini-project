export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      console.log(state);
      return {...state, productParams: action.payload};
      break;
    case "CHANGE_PAGE":
      console.log(state);
      return {...state, productParams: {...state.productParams, _page: action.payload}};
      break;
    case "GET_TYPE":
      console.log(state);
      if(state.productParams[action.payload.params]) {
        return {...state, productParams: {...state.productParams, _page: 1, [action.payload.params]: [...state.productParams[action.payload.params],action.payload.text]}};
      }
      return {...state, productParams: {...state.productParams, _page: 1, [action.payload.params]: [action.payload.text]}};
      break;
    case "GET_PRODUCTS":
      console.log(state);
      return {...state, products: action.payload};
      break;
    case "GET_ALL_PRODUCTS":
      console.log(state);
      return {...state, allProducts: action.payload};
      break;
    case "CHANGE_CURRENT_LINK":
      console.log(state);
      return {...state, currentLink: action.payload};
      break;
    case "GET_RATINGS":
      console.log(state);
      return {...state, productParams: {...state.productParams, ...action.payload}};
      break;
    case "GET_PRICES":
      console.log(state);
      return {...state, productParams: {...state.productParams, price_range: action.payload}};
      break;
    case "SORT_PRICE_ASC":
      console.log(state);
      return {...state, productParams: {...state.productParams, _sort: 'price', _order: action.payload}};
      break;
    case "SORT_PRICE_ASC":
      console.log(state);
      return {...state, productParams: {...state.productParams, _sort: 'price', _order: action.payload}};
      break;
    case "GET_FEATURED":
      console.log(state);
      return {...state, productParams: {...state.productParams, _sort: '', _order: ''}};
      break;
    case "SEARCH_BY_NAME":
      console.log(state);
      return {...state, productParams: {_page: 1, _limit: 16, name_like: action.payload}};
      break;
    default:
      break;
  }
};
