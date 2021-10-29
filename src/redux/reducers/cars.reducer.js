import { imgData } from "../../data/carouselData";
import { GET__CARS } from "../actionTypes";
const initialState = {
  cars: imgData,
  carsInCart: [],
};
export const getCars = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET__CARS:
      return state;
    default:
      return state;
  }
};
