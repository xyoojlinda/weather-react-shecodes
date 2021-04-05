import React, { useState } from "react";
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
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `6c3ed25c99387b9ebbd7be3237775381`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <div className="location">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city"
              className="search form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="button btn btn-light mb-2">
              <i className="searchIcon fas fa-search"></i>
            </button>
            <button type="submit" className="button btn btn-light mb-2">
              <i className="locationIcon fas fa-map-marker-alt"></i>
            </button>
          </form>
        </div>
        <Description info={weatherData} />
      </div>
    );
  } else {
    search();
    return <h1> Loading... </h1>;
  }
}