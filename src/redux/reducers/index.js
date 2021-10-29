import { combineReducers } from "redux";
import { getCars } from "./cars.reducer";

const rootReducer = combineReducers({ cars: getCars });
export default rootReducer;
