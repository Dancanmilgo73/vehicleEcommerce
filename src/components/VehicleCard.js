import React, { useState } from "react";
import "./VehicleCard.css";
import { Link } from "react-router-dom";

export default function VehicleCard() {
  const [quantity, setQuantity] = useState(false);
  const [inputVal, setInputVal] = useState(1);
  let id = 1;
  return (
    <div className="card__item">
      <Link
        to={`details/${id}`}
        className="card__img"
        style={{ decoration: "none" }}
      >
        <img
          alt="avatar"
          src="https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </Link>
      <span>Audi</span>
      <span>Milage: 0</span>
      <span>2020</span>
      <span>Ksh 3m</span>

      {quantity ? (
        <div className="card__inputQuantity">
          <button onClick={() => inputVal > 1 && setInputVal(inputVal - 1)}>
            -
          </button>
          {inputVal}
          <button onClick={() => setInputVal(inputVal + 1)}>+</button>
        </div>
      ) : (
        <button className="btn__addtocart" onClick={() => setQuantity(true)}>
          Add to Cart
        </button>
      )}
    </div>
  );
}
