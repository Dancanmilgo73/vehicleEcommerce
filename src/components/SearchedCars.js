import React from "react";
import { useSelector } from "react-redux";
import VehicleCard from "./VehicleCard";
import "../styles/SearchedCars.css";

function SearchedCars() {
  const { searchedCars } = useSelector((state) => state.cars);
  return (
    <div className="searchedCars__con">
      {searchedCars.map((car) => (
        <VehicleCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default SearchedCars;
