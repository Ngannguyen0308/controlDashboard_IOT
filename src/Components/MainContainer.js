import React from "react";
import "./BoxElement.css";
import Banner from "../img/3dIll.jpg";
import BoxElement from "./BoxElement";
import { ReactTyped } from "react-typed";
import GetWeather from "./GetWeather";
import BoxValue from "./BoxValue";
import MQTTComponent from "./Connection";
import handleMess from "./handleMessage";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div className="banner">
          <div className="ImgBanner">
            <img src={Banner} />
          </div>

          <div className="textContainer">
            <h1> Welcome to</h1>
            <h1>
              {" "}
              <ReactTyped
                strings={["Control Weather Simulator"]}
                typeSpeed={100}
                loop
              />
            </h1>            
            <h2><GetWeather /></h2>
          </div>
        </div>

        <div className="cards">
          <BoxElement />
          <BoxValue/>
          <MQTTComponent/>
          {/* <handleMess/> */}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
