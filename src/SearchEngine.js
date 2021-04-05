import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Forecast from "./Forecast";
import ForecastDaily from "./ForecastDaily";
import axios from "axios";

import "./SearchEngine.css";
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `6c3ed25c99387b9ebbd7be3237775381`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleLocation(position) {
    const apiKey = `6c3ed25c99387b9ebbd7be3237775381`;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function navigation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handleLocation);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <div className="location">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter in a city"
              className="search form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="button btn btn-light mb-2">
              <i className="searchIcon fas fa-search">🔍</i>
            </button>
            <button
              type="submit"
              className="button btn btn-light mb-2"
              onClick={navigation}
            >
              <i className="locationIcon fas fa-map-marker-alt">📍</i>
            </button>
          </form>
        </div>
        <FormattedDate date={weatherData.date} />
        <CurrentWeather weatherInfo={weatherData} />
        <Forecast city={weatherData.city} />
        <hr />
        <ForecastDaily coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return <h1> Loading... </h1>;
  }
}