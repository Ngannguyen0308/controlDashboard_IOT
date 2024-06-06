import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import './BoxElement.css';

function BoxElement() {
  const [status, setStatus] = useState({
    temperature: false,
    humidity: false,
    wind: false,
    light: false,
  });

  const handleToggle = (key) => {
    setStatus((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="dashboard">
      <div className="box" >
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="switchOn">{status.temperature ? "ON" : "OFF"}</div>
        <label className="switch">
          <input type="checkbox" checked={status.temperature} readOnly onClick={() => handleToggle("temperature")}/>
          <span className="slider"></span>
        </label>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faTint} size="2x" color="white" />
        <div className="switchOn">{status.humidity ? "ON" : "OFF"}</div>
        <label className="switch">
          <input type="checkbox" checked={status.humidity} readOnly onClick={() => handleToggle("humidity")} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faWind} size="2x" color="white" />
        <div className="switchOn">{status.wind ? "ON" : "OFF"}</div>
        <label className="switch">
          <input type="checkbox" checked={status.wind} readOnly onClick={() => handleToggle("wind")}/>
          <span className="slider"></span>
        </label>
      </div>
      <div className="box">
        <FontAwesomeIcon icon={faLightbulb} size="2x" color="white" />
        <div className="switchOn">{status.light ? "ON" : "OFF"}</div>
        <label className="switch">
          <input type="checkbox" checked={status.light} readOnly onClick={() => handleToggle("light")}/>
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default BoxElement;
