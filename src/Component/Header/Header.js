import React, { useState } from "react";
import "./Header.css";
import {
  avatar,
  logo,
  secure,
  customer,
  privates,
  refund,
  verified,
} from "../../images/images";

const Header = () => {
  return (
    <div>
      <div className="backgroundImage">
        <nav
          class="navbar navbar-expand-lg  navbarstyle"
          // style={{ position: "absolute", top: 0, width: "100%" }}
        >
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
              <img
                src={logo}
                style={{
                  height: "66.25px",
                  width: "232px",
                  objectFit: "contain",
                }}
              />
              {/* Guruji */}
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
                    class="nav-link active text-white home"
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
            marginBottom: "104px",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            <h1 className="title">"Astrology for Clarity"</h1>
            <p className="detail">
              Your Name is a Vedic Astrologer and has expertise in Vasstu and
              Mantra Theraphy.
            </p>
            <button className="contactbutton">Contact Now</button>
          </div>
        </div>
        <div className="customercarecontainer">
          <div>
            <img src={customer} />
          </div>
          <div>
            <img src={refund} />
          </div>
          <div>
            <img src={privates} />
          </div>
          <div>
            <img src={verified} />
          </div>
          <div>
            <img src={secure} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
