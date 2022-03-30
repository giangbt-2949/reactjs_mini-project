export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      console.log(state);
      return {...state, ...action.payload};
      break;
    case "CHANGE_PAGE":
      console.log(state);
      return {...state, _page: action.payload};
      break;
  
    default:
      break;
  }
};
