import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from '@mui/material/Slider';
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";

function BoxElement() {
  const [status, setStatus] = useState({
    temperature: false,
    humidity: false,
    wind: false,
    light: false,
  });

  // const handleToggle = (key) => {
  //   setStatus((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };

  const handleToggle = (type, value) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [type]: value,
    }));
  };

  const handleSliderChange = (event, newValue) => {
    handleToggle('temperature', newValue);
  };

  return (
    <div className="dashboard">
      <div className="box">
        <div className="switchOn">{status.temperature ? "ON" : "OFF"}</div>
        <label className="switch">
          {/* <input
            type="checkbox"
            checked={status.temperature}
            readOnly
            onClick={() => handleToggle("temperature")}
          /> */}
          <Slider
            value={status.temperature}
            defaultValue={0}
            min={0}
            max={3}
            step={1}
            shiftStep={1}
            marks
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"

            sx={{
              color: 'white',  // Change track and thumb color
              '& .MuiSlider-thumb': {
                borderColor: 'white', // Change thumb border color
              },
              '& .MuiSlider-rail': {
                color: 'white',  // Change rail color
              },
              '& .MuiSlider-mark': {
                color: 'white',  // Change marks color
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Temperature</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.humidity ? "ON" : "OFF"}</div>
        <label className="switch">
          {/* <input
            type="checkbox"
            checked={status.humidity}
            readOnly
            onClick={() => handleToggle("humidity")}
          /> */}
          {/* <span className="slider"></span> */}
          <Slider
            value={status.humidity}
            defaultValue={0}
            min={0}
            max={3}
            step={1}
            shiftStep={1}
            marks
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"

            sx={{
              color: 'white',  // Change track and thumb color
              '& .MuiSlider-thumb': {
                borderColor: 'white', // Change thumb border color
              },
              '& .MuiSlider-rail': {
                color: 'white',  // Change rail color
              },
              '& .MuiSlider-mark': {
                color: 'white',  // Change marks color
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faTint} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Humidity</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.wind ? "ON" : "OFF"}</div>
        <label className="switch">
          {/* <input
            type="checkbox"
            checked={status.wind}
            readOnly
            onClick={() => handleToggle("wind")}
          /> */}
          {/* <span className="slider"></span> */}
          <Slider
            value={status.wind}
            defaultValue={0}
            min={0}
            max={3}
            step={1}
            shiftStep={1}
            marks
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"

            sx={{
              color: 'white',  // Change track and thumb color
              '& .MuiSlider-thumb': {
                borderColor: 'white', // Change thumb border color
              },
              '& .MuiSlider-rail': {
                color: 'white',  // Change rail color
              },
              '& .MuiSlider-mark': {
                color: 'white',  // Change marks color
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faWind} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Wind</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.light ? "ON" : "OFF"}</div>
        <label className="switch">
          {/* <input
            type="checkbox"
            checked={status.light}
            readOnly
            onClick={() => handleToggle("light")}
          /> */}
          {/* <span className="slider"></span> */}
          <Slider
            value={status.light}
            defaultValue={0}
            min={0}
            max={3}
            step={1}
            shiftStep={1}
            marks
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"

            sx={{
              color: 'white',  // Change track and thumb color
              '& .MuiSlider-thumb': {
                borderColor: 'white', // Change thumb border color
              },
              '& .MuiSlider-rail': {
                color: 'white',  // Change rail color
              },
              '& .MuiSlider-mark': {
                color: 'white',  // Change marks color
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faLightbulb} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Light</div>

      </div>
    </div>
  );
}

export default BoxElement;
