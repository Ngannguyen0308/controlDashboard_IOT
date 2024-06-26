import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "@mui/material/Slider";
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";
import ConnectToBroker from "./Connection";

function BoxElement() {
  const [status, setStatus] = useState({
    temperature: 0,
    fog: 0,
    fume: 0,
    rain: 0,
  });

  const [publishMsg, setPublishMsg] = useState(null);

  const handleSliderChange = (type, event, newValue) => {
    setStatus((prevStatus) => {
      const newStatus = { ...prevStatus, [type]: newValue };
      let msg = "OFF";

      if (newValue === 1) {
        msg = "ON1";
      } else if (newValue === 2) {
        msg = "ON2";
      } else if (newValue === 3) {
        msg = "ON3";
      }

      const payloadMsg = {
        type: type,
        msg: msg,
      };
      setPublishMsg(payloadMsg);
      // console.log("CHECK HANDLE SLIDERCHANG", newStatus);

      return newStatus;
    });
  };

  return (
    <div className="dashboard">
      <ConnectToBroker publishMessage={publishMsg} />
      <div className="box">
        <div className="switchOn">{status.temperature > 0 ? "ON" : "OFF"}</div>
        <label className="switch">
          <Slider
            value={status.temperature}
            min={0}
            max={3}
            step={1}
            marks
            onChange={(event, newValue) =>
              handleSliderChange("temperature", event, newValue)
            }
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: "white",
              "& .MuiSlider-thumb": {
                borderColor: "white",
              },
              "& .MuiSlider-rail": {
                color: "white",
              },
              "& .MuiSlider-mark": {
                color: "white",
              },
            }}
          />
        </label>
        <FontAwesomeIcon
          icon={faTemperatureHigh}
          size="2x"
          color="white"
          style={{ marginTop: "20px" }}
        />
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
            onChange={(event, newValue) =>
              handleSliderChange("fog", event, newValue)
            }
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: "white",
              "& .MuiSlider-thumb": {
                borderColor: "white",
              },
              "& .MuiSlider-rail": {
                color: "white",
              },
              "& .MuiSlider-mark": {
                color: "white",
              },
            }}
          />
        </label>
        <FontAwesomeIcon
          icon={faTint}
          size="2x"
          color="white"
          style={{ marginTop: "20px" }}
        />
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
            onChange={(event, newValue) =>
              handleSliderChange("fume", event, newValue)
            }
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: "white",
              "& .MuiSlider-thumb": {
                borderColor: "white",
              },
              "& .MuiSlider-rail": {
                color: "white",
              },
              "& .MuiSlider-mark": {
                color: "white",
              },
            }}
          />
        </label>
        <FontAwesomeIcon
          icon={faWind}
          size="2x"
          color="white"
          style={{ marginTop: "20px" }}
        />
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
            onChange={(event, newValue) =>
              handleSliderChange("rain", event, newValue)
            }
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
            sx={{
              color: "white",
              "& .MuiSlider-thumb": {
                borderColor: "white",
              },
              "& .MuiSlider-rail": {
                color: "white",
              },
              "& .MuiSlider-mark": {
                color: "white",
              },
            }}
          />
        </label>
        <FontAwesomeIcon
          icon={faCloudRain}
          size="2x"
          color="white"
          style={{ marginTop: "20px" }}
        />
        <div className="factor">Rain</div>
      </div>
    </div>
  );
}

export default BoxElement;
