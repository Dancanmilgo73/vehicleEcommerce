import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { searchCar } from "../redux/actions/cars.actions";
import { Link } from "react-router-dom";
import "../styles/Search.css"

export default function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSubmit = (input) => {
    dispatch(searchCar(input));
  };
  return (
    <div className="search__con">
      <div className="search__input">
        <input
          type="text"
          id="search"
          value={input}
          placeholder="Search for car"
          onChange={(e) => setInput(e.target.value)}
        />
        <Link to={`/search/${input}`}>
          <SearchIcon
            className="search__button"
            onClick={() => handleSubmit(input)}
          />
        </Link>
      </div>
    </div>
  );
}
