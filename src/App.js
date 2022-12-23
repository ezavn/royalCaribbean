import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Luxury from "./components/Luxury";
import Register from "./components/Register";
import Relax from "./components/Relax";
import Scale from "./components/Scale";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Trip from "./components/Trip";
import Why from "./components/Why";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import VideoPopup from "./components/common/VideoPopup";
import { PopupProvider } from "./contexts/popupContext";
import PopupDay1 from "./components/common/PopupDay1";
import PopupDay2 from "./components/common/PopupDay2";
import PopupDay3 from "./components/common/PopupDay3";
import PopupDay4 from "./components/common/PopupDay4";
import PopupDay5 from "./components/common/PopupDay5";

function App() {
  return (
    <>
      <PopupProvider>
        <Header></Header>
        <Banner></Banner>
        <Why></Why>
        <Scale></Scale>
        <Relax></Relax>
        <Luxury></Luxury>
        <Services></Services>
        <Trip></Trip>
        <Register></Register>
        <Gallery></Gallery>
        {/* <Testimonial></Testimonial> */}
        <Footer></Footer>
        <VideoPopup></VideoPopup>
        <PopupDay1></PopupDay1>
        <PopupDay2></PopupDay2>
        <PopupDay3></PopupDay3>
        <PopupDay4></PopupDay4>
        <PopupDay5></PopupDay5>
      </PopupProvider>
    </>
  );
}

export default App;
