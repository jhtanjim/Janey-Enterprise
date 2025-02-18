import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Services from "../Services/Services ";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container lg:mx-auto ">
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
