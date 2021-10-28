import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div className="search__con">
      <div className="search__input">
        <input type="text" id="search" placeholder="Search for car" />
        <SearchIcon className="search__button" />
      </div>
    </div>
  );
}
