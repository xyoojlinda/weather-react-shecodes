
import React, { useState } from "react";
import ForecastDailyElement from "./ForecastDailyElement";
import axios from "axios";

import "./ForecastDaily.css";

export default function ForecastDaily(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="ForecastDaily">
        <div className="forecastList">
          <div className="row">
            <ForecastDailyElement daily={forecast[1]} />
            <ForecastDailyElement daily={forecast[2]} />
            <ForecastDailyElement daily={forecast[3]} />
            <ForecastDailyElement daily={forecast[4]} />
            <ForecastDailyElement daily={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "6c3ed25c99387b9ebbd7be3237775381";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);

    return "Loading...";
  }
}