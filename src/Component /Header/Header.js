import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../Images/hotstarlogo.svg";
import "./Header.css";
// import Login from "../Login/Login";
// import PhoneNumber from "../Login/PhoneNumberModal";
// import OTPModal from "../Login/OTPModal";
import { backgroundImage, avatar } from "../../images/images";
import Slider from "../Slider/Slider";

const Header = () => {
  const [login, setLogin] = useState();

  // console.log(login, "login");

  const clickHandler = (a) => {
    // alert("hello")
    setLogin(a);
  };
  return (
    <div>
      <div style={{}} className="backgroundImage">
        
        <nav
          class="navbar navbar-expand-lg  navbarstyle"
          // style={{ position: "absolute", top: 0, width: "100%" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              Guruji
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link text-white"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Call with Astrologer
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    live (comming soon)
                  </a>
                </li>
                {/* <li class="nav-item ">
                <a class="nav-link disabled text-white">Disabled</a>
              </li> */}
              </ul>
            </div>
          </div>
          <div style={{ height: "100%", widht: "100%", marginRight: "50px" }}>
            <img
              src={avatar}
              class="rounded-circle"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          {/*  */}
        </nav>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            alignItems:'center',
            // position: "absolute",
            // top: 200,
            // left: 600,
          }}
        >
          <div
            style={{
              textAlign:"center",
              color:"white",

              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "column",
            }}
          >
            <h1 >"Astrology for Clarity"</h1>
            <p >
              {" "}
              Your Name is a Vedic Astrologer and has expertise in Vasstu and
              Mantra Theraphy.
            </p>
            <button
              class="bg-primary"
              style={{
                height: "50px",
                width: "140px",
                borderRadius: "8px",
                border: "none",
              }}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
      {/* <Slider /> */}
    </div>
  );
};
export default Header;
