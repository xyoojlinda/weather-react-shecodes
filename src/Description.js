import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="DescriptionData">
      <h1 id="city">Milwaukee </h1>
      <h4>Last updated:</h4>
      <h2> Jan. 22, 21 ; 12:00 PM</h2>
      <h3>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        °C|°F
      </h3>

      <p className="degree">
        <span id="degree">Cloudy</span>
      </p>

      <h5>
        Humidity: <span id="humid" className="description"></span>%
        <br />
        Wind speed: <span id="windy" className="description"></span>km/h
      </h5>
    </div>
  );
}
