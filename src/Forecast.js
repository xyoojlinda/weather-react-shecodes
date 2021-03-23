import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <ul className="Forecast">
      <li>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        <div>Monday</div>
        <div>0˚ | -6˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        <div>Teus</div>
        <div>-4˚ | -12˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        <div>Weds</div>
        <div>-1˚ | -14˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        <div>Thurs</div>
        <div>1˚ | -7˚</div>
      </li>
      <li>
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          id="icon"
          alt="clear"
        />
        <div>Fri</div>
        <div>-12˚ | -17˚</div>
      </li>
    </ul>
  );
}
