import React, { Component } from "react";
import Slider from "react-slick";
import { review1,review2,review3,review6 } from "../../images/images";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", marginRight:'50px' }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", marginLeft:'50px' }}
        onClick={onClick}
      />
    );
  }
export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 100,
      focusOnSelect: true,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div style={{width :'100%', display:'flex',justifyContent:'center',flexDirection:'column'}}>
        {/* <h2>Center Mode</h2> */}
        <Slider {...settings} >
          <div>
            {/* <h3>1</h3> */}
            <img src={review1} style={{height:'86px', width:'86px'}}/>
          </div>
          <div>
            {/* <h3>2</h3> */}
            <img src={review2} style={{height:'86px', width:'86px'}}/>
          </div>
          <div>
            {/* <h3>3</h3> */}
            <img src={review3} style={{height:'86px', width:'86px'}}/>
          </div>
          <div>
            {/* <h3>4</h3> */}
            <img src={review6}  style={{height:'172px', width:'172px'}}/>
          </div>
          <div>
            {/* <h3>5</h3> */}
            <img src={review1} style={{height:'86px', width:'86px'}}/>
          </div>
          <div>
            {/* <h3>6</h3> */}
            <img src={review2} style={{height:'86px', width:'86px'}}    />
          </div>
        </Slider>
      </div>
    );
  }
}