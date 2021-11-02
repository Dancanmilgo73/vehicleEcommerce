import {
  GET__CARS,
  ADD__TO__CART,
  INCREMENT__QUANTITY,
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
export const searchCar = (input) => {
  return { type: SEARCH__CAR, payload: input };
};
