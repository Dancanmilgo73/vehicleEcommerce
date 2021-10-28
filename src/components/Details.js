import React from "react";
import "./Details.css";

export default function Details() {
  return (
    <div className="details__con">
      <div className="details__img">
        <img
          alt="avatar"
          src="https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="details__specs">
        <h3>Audi Q7</h3>
        <p>Ksh 4million</p>
        <p>Year of manufucture 2019</p>
        <p>Manufucturer: Audi</p>
        <p> Transmission: CVT</p>
        <p>Tank capacity: 41litres</p>
        <p>Fuel consumption: 26mpg</p>
        <p>Mileage: 0</p>
      </div>
    </div>
  );
}
