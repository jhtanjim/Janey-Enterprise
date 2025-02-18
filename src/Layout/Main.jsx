import { Outlet } from "react-router";
import NavBar from "../Components/navBar";
import Footer from "../Components/footer";

const Main = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
