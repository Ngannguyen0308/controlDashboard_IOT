import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";
import GaugeTempt from "./GaugeTempt";
import GaugeHum from "./GaugeHum";
import GaugeLight from "./GaugeLight";
import ConnectToBroker from "./Connection";

function BoxValue() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);

  const hanldeMessages = (payload) => {
    if (payload) {
      try {
        const messages = JSON.parse(payload.message);
        const { msg, type } = messages;
        console.log("CHECK PAYLOAD BOXVALUE:", messages);

        if (!isNaN(msg)) {
          switch (type) {
            case "temperature":
              setTemperature(msg);
              break;
            case "humidity":
              setHumidity(msg);
              break;
            case "light":
              setLight(msg);
              break;
            default:
              console.log("Unknown type:", type);
              break;
          }
        } else {
          console.log("Invalid message:", msg);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  };

  return (
    <div className="boxContainer">
      <ConnectToBroker onMessage={hanldeMessages} />
      <div className="boxele">
        <div className="factor">Temperature</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart">
          <GaugeTempt value={temperature} />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Humidity</div>
        <FontAwesomeIcon icon={faTint} size="2x" color="white" />
        <div className="gaugeChart">
          <GaugeHum value={humidity} />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Light loss</div>
        <FontAwesomeIcon icon={faWind} size="2x" color="white" />
        <div className="gaugeChart">
          <GaugeLight value={light} />
        </div>
      </div>
    </div>
  );
}

export default BoxValue;
