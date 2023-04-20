import logo from "./logo.svg";
// import "./App.css";
import Header from "./Component/Header/Header";
import Slider from "./Component/Slider/Slider";
import AstroCircle from "./Component/astrocircle/astroCircle";
import Card from "./Component/card/Card";
// import ReviewCarousel from "./Component/Review/Review";

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <Card />
      <AstroCircle />
      {/* <ReviewCarousel /> */}
    </div>
  );
}

export default App;
