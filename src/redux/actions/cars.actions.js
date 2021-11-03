import {
  GET__CARS,
  ADD__TO__CART,
  INCREMENT__QUANTITY,
  DECREMENT__QUANTITY,
  REMOVE__CAR,
  SEARCH__CAR,
} from "../actionTypes";
export const getCars = () => {
  return { type: GET__CARS };
};
export const addCarToCart = (id) => {
  return { type: ADD__TO__CART, payload: id };
};
export const incrementQuantity = (id) => {
  return { type: INCREMENT__QUANTITY, payload: id };
};
export const decrementQuantity = (id) => {
  return { type: DECREMENT__QUANTITY, payload: id };
};
export const searchCar = (input) => {
  return { type: SEARCH__CAR, payload: input };
};
export const removeItem = (id) => {
  return { type: REMOVE__CAR, payload: id };
};
