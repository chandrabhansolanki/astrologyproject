import React from "react";
import { chakra } from "../../images/images";
import "./astroCircle.css";
import { avatar } from "../../images/images";

const astroCircle = () => {
  return (
    <div style={{display: "flex", justifyContent: "center" , alignItems:'center', flexDirection:"column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "24px", color: "red" }}>
          * Many problem One Solution *
        </p>
      </div>

      <div style={{ display: "flex", alignItems:'center' }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainer">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainer">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainer">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainer">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
        </div>
        <div className="chakracontainer">
          <img className="charkrarotate" src={chakra} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainertwo">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainertwo">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainertwo">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
          <div className="cardcontainertwo">
            <img src={avatar} style={{ height: "40px", width: "40px" }} />
            <p>Money problem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default astroCircle;
