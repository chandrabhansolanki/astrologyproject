import React from "react";
import { chakra } from "../../images/images";
import "./astroCircle.css";
import {
  avatar,
  loveProblem,
  marriage,
  job,
  lucky,
  education,
} from "../../images/images";

const astroCircle = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: "24px", color: "red" }}>
          * Many problem One Solution *
        </p>
      </div>

      <div className="mainCardContainer">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainer">
            <img src={education} style={{ height: "57px", width: "55px" }} />
            <p>Education Problems </p>
          </div>
          <div className="cardcontainer">
            <img src={loveProblem} style={{ height: "57px", width: "55px" }} />
            <p>Love Related Problem </p>
          </div>
          <div className="cardcontainer">
            <img src={marriage} style={{ height: "57px", width: "55px" }} />
            <p>Marriage Problem </p>
          </div>
          <div className="cardcontainer">
            <img src={job} style={{ height: "57px", width: "55px" }} />
            <p>Job/Business Problems </p>
          </div>
        </div>
        <div className="chakracontainer">
          <img className="charkrarotate" src={chakra} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardcontainertwo">
            <p>Health Problems</p>
            <img src={lucky} style={{ height: "57.16px", width: "55.66px", textAlign:"left" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Lucky Number / Color</p>
            <img src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Child Birth Issues</p>
            <img src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
          <div className="cardcontainertwo">
            <p>Husband Wife Problems</p>
            <img src={lucky} style={{ height: "57.16px", width: "55.66px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default astroCircle;
