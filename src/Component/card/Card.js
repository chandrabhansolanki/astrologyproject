import { image1, image2, image3, image4 } from "../../images/images";
// import pre from "../Images/pre.png"
// import next from "../Images/nxt.png"
// import {Link} from "react-router-dom";
import "./Card.css";

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
    name: "chandra ",
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
    name: "chandra bhan singh solanki sdf sdf sdf sfds sdf s",
    specalist: "specalist",
    love: "Love, Business, Life ",
    skills: "Skills",
    kundali: "Vedic Astrology, Kundali,",
    price: "price",
    amount: "₹10/min",
    year: "10+ Years",
  },
];

const Card = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="mainContainer">
        <div className="allCardsContainer ">
          {card?.map((item) => {
            return (
              <div key={item?.id} className="cardContainer">
                <img src={item?.image} alt="movie" />
                <div className="experience">
                    <h6 style={{color:'white'}}>{item.year}</h6>
                   <img />
                </div>
                <div className="card-data">
                  <h2>{item.name}</h2>
                  <p style={{ color: "#FFDBC0" }}>{item?.specalist}</p>
                  <h4>{item.love}</h4>
                  <div style={{ display: "flex", justifyContent:'space-between', marginRight:'10px' , width:'100%' }}>
                    <div>
                      <p style={{ color: "#FFDBC0" }}>{item?.skills}</p>
                      <h4>{item.kundali}</h4>
                    </div>
                    <div style={{color:'#5CE449', display:'flex', flexDirection:'column',alignItems:'center'}}>
                      <p style={{fontSize:'14px'}}>{item.price}</p>
                      <h4 style={{fontSize:'18px'}}>{item.amount}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
