import React from "react";
import "../styles/Details.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
  const { cars } = useSelector((state) => state.cars);
  let { id } = useParams();
  const car = cars.filter((car) => car.id === Number(id));
  // console.log(car);
  return (
    <div className="details__con">
      <div className="details__img">
        <img alt="avatar" src={car[0].image} />
      </div>
      <div className="details__specs">
        <h3>{car[0].name}</h3>
        <p>{car[0].price}</p>
        <p>{car[0].model}</p>
        <p>{car[0].Class}</p>
        <p>{car[0].transmission}</p>
        <p>{car[0].body_style}</p>
        <p>{car[0].horse__power}</p>
        <p>{car[0].Accelaration}</p>
      </div>
    </div>
  );
}
