import * as actionTypes from "./actionsTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(params) {
    
}

export function getCategories(params) {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
