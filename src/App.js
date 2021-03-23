import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import "./index.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";
import Description from "./Description.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Description />
      <Forecast />
      <Footer />
    </div>
  );
}