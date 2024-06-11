import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureHigh,
  faTint,
  faWind,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import "./BoxElement.css";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

function BoxValue() {
  return (
    <div className="boxContainer">
      <div className="boxele">
        <div className="factor">Temperature</div>
        <FontAwesomeIcon icon={faTemperatureHigh} size="2x" color="white" />
        <div className="gaugeChart">
          <Gauge
            value={75}
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Humidity</div>
        <FontAwesomeIcon icon={faTint} size="2x" color="white" />
        <div className="gaugeChart">
          <Gauge
            value={50}
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Wind</div>
        <FontAwesomeIcon icon={faWind} size="2x" color="white" />
        <div className="gaugeChart">
          <Gauge
            value={30}
            startAngle={-110}
            endAngle={110}
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
            }}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
        </div>
      </div>

      <div className="boxele">
        <div className="factor">Light</div>
        <FontAwesomeIcon icon={faLightbulb} size="2x" color="white" />
        <div className="gaugeChart">
          <Gauge
            value={80}
            startAngle={-110}
            endAngle={110}
            sx={(theme)=> ({
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 30,
                transform: "translate(0px, 0px)",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#52b202',
              },
            })}
            text={({ value, valueMax }) => `${value} / ${valueMax}`}
          />
        </div>
      </div>
    </div>
  );
}

export default BoxValue;
