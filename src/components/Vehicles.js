import React, {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import "../styles/Vehicle.css";
import VehicleCard from "./VehicleCard";
import {getCars} from "../redux/actions/cars.actions"

export default function Vehicles() {
  const dispatch =useDispatch()
  useEffect(()=>{
dispatch(getCars())
  },[])
  const { cars } = useSelector((state) => state.cars);
  // console.log(cars);
  return (
    <div className="vehicles__con">
      {cars.map((car) => (
        <VehicleCard key={car.id} car={car} />
      ))}
    </div>
  );
}
