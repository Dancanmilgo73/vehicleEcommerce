import axios from 'axios';
import {
  GET__CARS,
  ADD__TO__CART,
  INCREMENT__QUANTITY,
  DECREMENT__QUANTITY,
  REMOVE__CAR,
  SEARCH__CAR,
} from "../actionTypes";
export const getCars = () => (dispatch) => {
  // dispatch({type: GET__CARS});
  axios.get('http://localhost:3001/')
  .then(function (response) {
    // handle success
    console.log(response.data);
  dispatch({type: GET__CARS, payload: response.data});

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    console.log("fetched successfully");
  });
  // return { type: GET__CARS };
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
