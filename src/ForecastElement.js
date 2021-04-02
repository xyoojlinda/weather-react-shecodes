import React from "react";
import Icon from "./Icon";

export default function ForecastElement(props) {
  function hour() {
    let date = new Date(props.prediction.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temp() {
    let temperature = Math.round(props.prediction.main.temp);
    return `${temperature}°C`;
  }
  console.log(props.prediction);

  return (
    <div className="col">
      {hour()}
      <Icon code={props.prediction.weather[0].icon} />
      {temp()}
    </div>
  );
}