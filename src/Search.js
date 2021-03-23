import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <label>
        <input type="text" placeholder="Enter city name here" />
      </label>
      <input type="submit" value="🔍" className="SearchButton" />
      <input type="submit" value="📍" className="CurrentCityButton" />
    </form>
  );
}