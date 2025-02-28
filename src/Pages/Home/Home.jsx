import { Link } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services ";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <div >
        <Banner />
      </div>
      <div>
        <div >
          <About />
        </div>
        <div >
          <Services />
        </div>
        <div >
          {/* Pass a prop to show only 6 images */}
          <Gallery limit={6} />
         
        </div>
        <div >
          <WhyUs />
        </div>
        <div >
          <Contact />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
