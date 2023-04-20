import React, { useState } from "react";
import {
  image1,
  image2,
  image3,
  image4,
  livecall,
  bottomframe,
  banner,
} from "../../images/images";
// import pre from "../Images/pre.png"
// import next from "../Images/nxt.png"
// import {Link} from "react-router-dom";
import "./Card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { call, message } from "../../images/images";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

const card = [
  {
    id: 1,
    image: image1,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 2,
    image: image2,
    name: "Madhavi",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 3,
    image: image3,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "Jack",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "Mahipal",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
  {
    id: 4,
    image: image4,
    name: "chandra ",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },

 
  
];

const data = [
  {
    image: banner,
  },
  {
    image: banner,
  },
  {
    image: banner,
  },
  {
    image: banner,
  },
];

const Card = () => {
  let count = 1;
  const checkNumber = (index) => {
    if (index == count) {
      count = count + 3;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{ width: "1224px", height: "356px" }}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide
            className="imageswipercontainer"
            //  style={{width:"1224px", height:'356px'}}
          >
            <img
              src={item?.image}
              // src={banner}
              alt="banner"
              style={{ width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mainContainer">
        <div className="allCardsContainer ">
          {card?.map((item, index) => {

            
            return (
              <div
                key={item?.id}
                className={
                  index == count
                    ? "cardContainer positioncontainer"
                    : "cardContainer"
                }
              >
                <img src={item?.image} alt="movie" />
                <div className="experience">
                  <h6 style={{ color: "white" }}>{item.year}</h6>
                  <img />
                </div>
                <div className="card-data">
                  <h2>{item.name}</h2>
                  <p style={{ color: "#FFDBC0" }}>{item?.specalist}</p>
                  <h4>{item.love}</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginRight: "10px",
                      width: "100%",
                    }}
                  >
                    <div>
                      <p style={{ color: "#FFDBC0" }}>{item?.skills}</p>
                      <h4>{item.kundali}</h4>
                    </div>
                    <div
                      style={{
                        color: "#5CE449",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "14px" }}>{item.price}</p>
                      <h4 style={{ fontSize: "18px" }}>{item.amount}</h4>
                    </div>
                  </div>
                </div>
                <img
                  src={livecall}
                  style={{
                    height: "66.73px",
                    width: "66.73px",
                    position: "absolute",
                    bottom: 15,
                    left: "42%",
                    zIndex: 5,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div className="buttonContianer">
                    <img
                      src={message}
                      style={{ height: "21.56px", width: "21.5px" }}
                    />
                    <span
                      style={{
                        color: "#FDFDFD",
                        paddingLeft: "8px",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      Chat
                    </span>
                  </div>
                  <div className="buttonContianertwo">
                    <img
                      src={call}
                      style={{ height: "21.56px", width: "21.5px" }}
                    />
                    <span
                      style={{
                        color: "#FDFDFD",
                        paddingLeft: "8px",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      Call
                    </span>
                  </div>
                </div>
                {/* {checkNumber(index)} */}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img
          src={bottomframe}
          alt="banner"
          style={{ height: "60px", width: "1224px" }}
        />
      </div>
    </div>
  );
};
export default Card;
