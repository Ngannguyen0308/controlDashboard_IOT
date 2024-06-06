import React from "react";
import "./BoxElement.css";
import Banner from "../img/3dIll.jpg";
import BoxElement from "./BoxElement";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
        >
          <div className="ImgBanner">
            <img src={Banner}/>
          </div>
          
          <div className="textContainer">
            <h1>Welcome to WSS</h1>
            <h2>Real value</h2>
            <p>Loading...</p>
          </div>
        </div>

        <div className="cards">
          <BoxElement/>
        </div>
      
      </div>
    </div>
  );
}

export default MainContainer;
