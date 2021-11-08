import React from "react";
import { useSelector } from "react-redux";
import "../styles/Vehicle.css";
import VehicleCard from "./VehicleCard";
export default function Vehicles() {
  const { cars } = useSelector((state) => state.cars);
  console.log(cars);
  return (
    <div className="vehicles__con">
      {cars.map((car) => (
        <VehicleCard key={car.id} car={car} />
      ))}
    </div>
  );
}
