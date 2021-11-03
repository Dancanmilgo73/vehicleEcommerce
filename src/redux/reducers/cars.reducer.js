import { vehicles } from "../../data/carData";
import {
  GET__CARS,
  ADD__TO__CART,
  INCREMENT__QUANTITY,
  DECREMENT__QUANTITY,
  REMOVE__CAR,
  SEARCH__CAR,
} from "../actionTypes";
const initialState = {
  cars: vehicles,
  carsInCart: [],
  searchedCars: [],
};
export const getCars = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET__CARS:
      return state;
    case ADD__TO__CART:
      let carInCart = state.cars.find((car) => car.id === payload);
      // console.log(carInCart);
      return {
        ...state,
        carsInCart: [...state.carsInCart, { ...carInCart, quantity: 1 }],
      };

    case INCREMENT__QUANTITY:
      // if (state.carsInCart.some((car) => car.id === payload)) {
      // const selectedCar = state.carsInCart.find((car) => car.id === payload);

      return {
        ...state,
        carsInCart: [
          ...state.carsInCart.map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        ],
      };
    case DECREMENT__QUANTITY:
      // if (state.carsInCart.some((car) => car.id === payload)) {
      // const selectedCar = state.carsInCart.find((car) => car.id === payload);

      return {
        ...state,
        carsInCart: [
          ...state.carsInCart.map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity > 1 && item.quantity - 1 }
              : item
          ),
        ],
      };
    case SEARCH__CAR:
      const serchedCars = state.cars.filter(
        (car) =>
          car.name.toLowerCase().includes(payload.toLowerCase()) ||
          car.model.toLowerCase().includes(payload.toLowerCase())
      );
      // console.log(serchedCars);
      return { ...state, searchedCars: serchedCars };

    case REMOVE__CAR:
      return {
        ...state,
        carsInCart: [...state.carsInCart.filter((car) => car.id !== payload)],
      };

    default:
      return state;
  }
};
