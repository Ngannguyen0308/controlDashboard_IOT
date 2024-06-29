import React from "react";
import GaugeComponent from "react-gauge-component";
import { Alert } from "@mui/material";

function GaugeHum({ value }) {
  if (value > 100 || value < 0) {
    return (
      <Alert severity="error" color="warning">
        Error: Humidity value is out of range.
      </Alert>
    );
  }

  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        gradient: true,
        subArcs: [
          {
            limit: 20,
            color: "#3572EF",
            showTick: true,
          },
          {
            limit: 40,
            color: "#F58B19",
            showTick: true,
          },
          {
            limit: 60,
            color: "#3572EF",
            showTick: true,
          },
          {
            limit: 80,
            color: "#F58B19",
            showTick: true,
          },
          {
            limit: 100,
            color: "#3572EF",
            showTick: true,
          },
        ],
      }}
      pointer={{
        color: "#C75CB0",
        length: 0.8,
        width: 15,
      }}
      value={value} // change value here
      minValue={0}
      maxValue={100}
    />
  );
}

export default GaugeHum;
