import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/component/Footer";

const LayoutApp = () => {
  return (
    <div className="bg-c-1 px-5 md:px-12 lg:px-20">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default LayoutApp;
