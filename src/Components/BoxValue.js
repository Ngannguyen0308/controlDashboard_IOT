import React from "react";
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

function BoxValue() {
  const valueLightLoss = 75; // change value here 

  return (
    <div className="boxContainer">
      <div className="boxele">
        <div className="factor">Temperature</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart">
          {/* <Gauge
            value={50} // change value here
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: "#C75CB0",
              },
            }}
          /> */}
          <GaugeTempt />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Humidity</div>
        <FontAwesomeIcon icon={faTint} size="2x" color="white" />
        <div className="gaugeChart">
          <GaugeHum />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Light loss</div>
        <FontAwesomeIcon icon={faWind} size="2x" color="white" />
        <div className="gaugeChart">
          <GaugeLight />
        </div>
      </div>
    </div>
  );
}

export default BoxValue;
