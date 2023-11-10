import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Myheader from "./Components/Myheader";
import Customer from "./Components/Customer";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Download from "./Components/Download";
import Testimonial from "./Components/Testimonial";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Work from "./Components/Work";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className=" overflow-hidden">
      <Myheader />
      <Features />
      <Customer />
      <Work />
      <Pricing />
      <Download />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
