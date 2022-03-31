export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      console.log(state);
      return {...state, productParams: action.payload};
      break;
    case "CHANGE_PAGE":
      console.log(state);
      return {...state, productParams: {...state.productParams, _page: action.payload}};
      break;
    case "TYPE":
      console.log(state);
      return {...state, productParams: action.payload};
      break;
    case "GET_PRODUCTS":
      console.log(state);
      return {...state, products: action.payload};
      break;
    default:
      break;
  }
};
