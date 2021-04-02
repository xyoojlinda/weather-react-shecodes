import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import axios from "axios";

import "./Search.css";
import Description from "./Description";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="location">
          <form className="search" onSubmit={handleSubmit}>
    );
  } else {
    search();
    return <h1> Loading... </h1>;
  }
}