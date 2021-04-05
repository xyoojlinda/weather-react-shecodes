import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Forecast from "./Forecast";
import SearchEngine from "./SearchEngine";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Milwaukee" />
      <CurrentWeather />
      <Forecast />
      <Footer />

    </div>
  );
}