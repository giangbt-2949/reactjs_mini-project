export const productReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY":
      console.log(state);
      return {...action.payload};
      break;
    case "CHANGE_PAGE":
      console.log(state);
      return {...state, _page: action.payload};
      break;
    case "TYPE":
      console.log(state);
      return {...action.payload};
      break;
    default:
      break;
  }
};
