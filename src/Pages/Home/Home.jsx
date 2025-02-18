import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services ";

const Home = () => {
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <div className="container lg:mx-auto">
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
