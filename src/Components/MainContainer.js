import React from "react";
import "./BoxElement.css";
import Banner from "../img/banner.jpg";
import BoxElement from "./BoxElement";
import { ReactTyped } from "react-typed";
import GetWeather from "./GetWeather";
import BoxValue from "./BoxValue";

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
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
