import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import Description from "./Description";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: (Math.round(response.data.main.temp)),
      city: (response.data.name),
      wind: (response.data.wind.speed),
      humidity: (response.data.main.humidity),
      description: (response.data.weather[0].description),
      icon: `http://openweathermap.org/img/wn/${(response.data.weather[0].icon)}@2x.png`,
      date: new Date(response.data.dt * 1000)
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function cityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "6c3ed25c99387b9ebbd7be3237775381";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={cityChange} />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <Description data={weatherData} />
      </div>
    );
  } else {
    search();
    return ("Loading..");
  }
}
