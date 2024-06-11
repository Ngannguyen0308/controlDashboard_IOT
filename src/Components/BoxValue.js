import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";
// import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
// import { Gauge } from "@mui/x-charts";

function BoxValue() {
  return (
    <div className="boxContainer">
      <div className="boxele">
        <div className="factor">Temperature</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart">
          {/* <Gauge
            value={75}
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          /> */}
          {/* <Gauge
          value={75} // thay gia tri tai day
          startAngle={-110}
          /> */}
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Humidity</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart"></div>
      </div>

      <div className="boxele">
        <div className="factor">Wind</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart"></div>
      </div>

      <div className="boxele">
        <div className="factor">Light</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart"></div>
      </div>
    </div>
    // <div className="boxValue">
    // <div className="valueContainer">
    //   <Gauge label="Temperature" value="22°" unit="C" description="24° in 20 min" />
    //   <Gauge label="Power" value="135" unit="Kwh" description="Saving 180€" />
    // </div>
    //   </div>
  );
}

export default BoxValue;
