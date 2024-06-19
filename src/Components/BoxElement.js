import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from '@mui/material/Slider';
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";

function BoxElement() {
  const [status, setStatus] = useState({
    temperature: 0,
    fog: 0,
    fume: 0,
    rain: 0,
  });

  const handleSliderChange = (type, event, newValue) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [type]: newValue,
    }));

    const url = newValue > 0 ? `http://172.16.4.101/LED=ON` : `http://172.16.4.101/LED=OFF`;
    fetch(url)  
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error sending request:', error);
      });
  };
  

  return (
    <div className="dashboard">
      <div className="box">
        <div className="switchOn">{status.temperature > 0 ? "ON" : "OFF"}</div>
        <label className="switch">
          <Slider
            value={status.temperature}
            min={0}
            max={3}
            step={1}
            marks
            onChange={(event, newValue) => handleSliderChange('temperature', event, newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: 'white', 
              '& .MuiSlider-thumb': {
                borderColor: 'white', 
              },
              '& .MuiSlider-rail': {
                color: 'white',  
              },
              '& .MuiSlider-mark': {
                color: 'white',  
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Temperature</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.fog > 0 ? "ON" : "OFF"}</div>
        <label className="switch">
          <Slider
            value={status.fog}
            min={0}
            max={3}
            step={1}
            marks
            onChange={(event, newValue) => handleSliderChange('fog', event, newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: 'white',
              '& .MuiSlider-thumb': {
                borderColor: 'white',
              },
              '& .MuiSlider-rail': {
                color: 'white',
              },
              '& .MuiSlider-mark': {
                color: 'white',
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faTint} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Fog</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.fume > 0 ? "ON" : "OFF"}</div>
        <label className="switch">
          <Slider
            value={status.fume}
            min={0}
            max={3}
            step={1}
            marks
            onChange={(event, newValue) => handleSliderChange('fume', event, newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: 'white',
              '& .MuiSlider-thumb': {
                borderColor: 'white',
              },
              '& .MuiSlider-rail': {
                color: 'white',
              },
              '& .MuiSlider-mark': {
                color: 'white',
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faWind} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Fume</div>
      </div>

      <div className="box">
        <div className="switchOn">{status.rain > 0 ? "ON" : "OFF"}</div>
        <label className="switch">
          <Slider
            value={status.rain}
            min={0}
            max={3}
            step={1}
            marks
            onChange={(event, newValue) => handleSliderChange('rain', event, newValue)}
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: 'white',
              '& .MuiSlider-thumb': {
                borderColor: 'white',
              },
              '& .MuiSlider-rail': {
                color: 'white',
              },
              '& .MuiSlider-mark': {
                color: 'white',
              }
            }}
          />
        </label>
        <FontAwesomeIcon icon={faCloudRain} size="2x" color="white" style={{ marginTop: '20px' }} />
        <div className="factor">Rain</div>
      </div>
    </div>
  );
}

export default BoxElement;
