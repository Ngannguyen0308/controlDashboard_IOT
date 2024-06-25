import React from "react";
import GaugeComponent from "react-gauge-component";

function GaugeLight({value}) {
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
        //   {
        //     limit: 60,
        //     color: '#F5CD19',
        //     showTick: true,
        //   },
        //   {
        //     limit: 80,
        //     color: '#F5CD19',
        //     showTick: true,
        //   },
        //   {
        //     limit: 100,
        //     color: '#F5CD19',
        //     showTick: true,
        //   },
          
        ]
      }}
      pointer={{
        color: '#C75CB0',
        length: 0.80,
        width: 15,
      }}
      
      value={value} // change value here
      minValue={0}
      maxValue={50}
    />
    </div>
  );
}

export default GaugeLight;
