import logo from "./logo.svg";
// import "./App.css";
import Header from "./Component/Header/Header";
import Slider from "./Component/Slider/Slider";
import AstroCircle from "./Component/astrocircle/astroCircle";
import Card from "./Component/card/Card";
// import ReviewCarousel from "./Component/Review/Review";
import CenterMode from "./Component/Review/Review";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <Card />
      <AstroCircle />
      <CenterMode />
      {/* <ReviewCarousel /> */}
      <Footer />
    </div>
  );
}

export default App;
