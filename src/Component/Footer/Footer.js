import "./Footer.css";
import {
  logo,
  facebook,
  insta,
  twiter,
  youtube,
  razor,
  stripe,
  paytm,
} from "../../images/images";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="firstcontainer">
        <img
          src={logo}
          style={{
            height: "66.25px",
            width: "auto",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />
        <p style={{ marginTop: "21.75px" }}>
          About Guruji s2 to 3 lines what guruji do and how it works About
          Guruji s2 to 3 lines what guruji do and how it works
        </p>
        <div className="socialmediacontainer">
          <span className="socialmedia">
            <img src={facebook} className="icon" />
          </span>
          <span>
            <img src={insta} className="icon" />
          </span>
          <span>
            <img src={twiter} className="icon" />
          </span>
          <span>
            <img src={youtube} className="icon" />
          </span>
        </div>
        <div className="trustedcontainer">
          <h4>Trusted & Seals</h4>
          <span>
            <img src={razor} />
          </span>
          <span>
            <img src={paytm} />
          </span>
          <span>
            <img src={stripe} />
          </span>
        </div>
      </div>
      <div className="secoundcontainer">
        <div className="companycontainer">
          <h5>Comapny</h5>
          <p>Home</p>
          <p>Privacy & Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div className="companycontainer" style={{ marginTop: "33px" }}>
          <h5>Collaborate</h5>
          <p>Exotel</p>
          <p>Facebook</p>
          <p>Quora</p>
          <p>Google</p>
          <p>Youtube</p>
        </div>
      </div>
      <div className="thirdcontainer">
        <div className="companycontainer">
          <h5>Support</h5>
          <p>Home</p>
          <p>Privacy & Policy</p>
          <p>T & C</p>
          <p>Varied Payment</p>
        </div>
        <div className="companycontainer" style={{ marginTop: "33px" }}>
          <h5>Important Link</h5>
          <p>Tarot Reader</p>
          <p>Vedic Astrology </p>
          <p>Palmistry</p>
          <p>Gemology</p>
          <p>Vastu</p>
          <p>Numerology</p>
        </div>
      </div>
      <div className="fourthcontainer">
        <div>
          <input
            type="text"
            required
            placeholder="Your Name"
            className="inputfield"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Mail"
            className="inputfield"
          />
        </div>
        <div>
          <textarea
            type="text"
            required
            placeholder="Write Query"
            className="textarea"
          />
        </div>
        <button className="submit">Submit</button>
      </div>
    </div>
  );
};
export default Footer;
