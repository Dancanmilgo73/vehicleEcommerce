import React, { useState } from "react";
import "../styles/VehicleCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCarToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem
} from "../redux/actions/cars.actions";

export default function VehicleCard({ car }) {
  const { carsInCart } = useSelector((state) => state.cars);

  // console.log(carsInCart);

  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(false);
  // const [inputVal, setInputVal] = useState(1);
  const isCarInCart = carsInCart.find((carInCart) => carInCart.id === car.id);
  // const isCarInCart = carsInCart.some((carInCart) => carInCart.id === car.id);
  // console.log(isCarInCart);
  if(isCarInCart?.quantity === 0) dispatch(removeItem(isCarInCart.id))
  // console.log(isCarInCart?.quantity);

  return (
    <div className="card__item">
      <Link
        to={`details/${car.id}`}
        className="card__img"
        style={{ decoration: "none" }}
      >
        <img alt="avatar" src={car.image} />
      </Link>
      <span>{car.name}</span>
      <span>{car.model}</span>
      <span>{car.horse_power}</span>
      <span>Ksh{car.price}</span>
<div className="buttons__con">
      {isCarInCart?.quantity ? (
        <div className="card__inputQuantity">
          <button onClick={() => dispatch(decrementQuantity(isCarInCart.id))}>
            -
          </button>
          {isCarInCart.quantity}
          <button onClick={() => dispatch(incrementQuantity(isCarInCart.id))}>
            +
          </button>
        </div>
      ) : (
        <button
          className="btn__addtocart"
          onClick={() => dispatch(addCarToCart(car.id))}
        >
          Add to Cart
        </button>
      )}
      <button  className="btn__addtocart"><Link   to={`details/${car.id}`} style={{ textDecoration: "none", color: "inherit"}}>View Details</Link></button>
    </div>
    </div>
  );
}
