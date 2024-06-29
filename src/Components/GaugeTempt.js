import React from "react";
import GaugeComponent from "react-gauge-component";
import { Alert } from "@mui/material";

function GaugeTempt({ value }) {
  if (value === undefined || value === null) {
    value = 10;
  }
  if (value > 50 || value < 0) {
    return (
        <Alert severity="error" color="warning">
          Error: Temperature value is out of range.
        </Alert>
    );
  }

  return (
    <div>
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.2,
          padding: 0.005,
          cornerRadius: 1,
          gradient: true,
          subArcs: [
            {
              limit: 25,
              color: '#F5CD19',
              showTick: true,
            },
            {
              limit: 40,
              color: '#5BE12C',
              showTick: true,
            },
          ]
        }}
        pointer={{
          color: '#C75CB0',
          length: 0.80,
          width: 15,
        }}
        value={value}
        minValue={0}
        maxValue={50}
      />
    </div>
  );
}

export default GaugeTempt;
