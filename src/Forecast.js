import React, { useState } from "react";
import ForecastElement from "./ForecastElement";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);

  function handleForecastData(response) {
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
