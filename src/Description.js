import React from "react";
import Forecast from "./Forecast.js";


export default function Description(props) {
  return (
    <div className="Description">
      <h1 className="city"> {props.info.city} </h1>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <WeatherTemp celsius={props.info.temp} />
          <p className="description text-capitalize">
            {props.info.description}
          </p>
        </div>
        <div className="col-4">
          <Icon
            code={props.info.icon}
            alt={props.info.description}
          />
        </div>
        <div className="col-4">
          <ul className="DescriptionInfo">
            <li>Feels like: {props.info.feelsLike}°C</li>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.windSpeed} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}