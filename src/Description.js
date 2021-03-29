import React from "react";
import "./Description.css";
import FormattedDate from "./FormattedDate.js";
import Icon from "./Icon.js";
import Forecast from "./Forecast.js";


export default function Description(props) {
  return (
    <div className="DescriptionData">
      <h1>   <Forecast defaultCity="Miami" /></h1>
      <ul>
        <li> <FormattedDate date={props.data.dt} /></li>
        <li className="text-capitalize"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-start">
              <Icon code={props.data.icon} />
            </span>
            <span className="float-start">
              <strong id="temperature">
                {props.data.temperature}
              </strong>
              <a href="/" className="active">
                °F
                </a>{" "}
                |<a href="/">°C</a>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:{props.data.humidity}%
                 </li>
            <li>
              Wind speed: {Math.round(props.data.wind)}mph
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
