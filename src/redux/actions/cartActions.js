import * as actionTypes from "./actionsTypes";

export function addToCart(cartItem) {
  return { type: actionTypes.ADD_TO_CART, payload: cartItem };
}

export function removeToCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}
export function removeFromCart(product) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: product };
}