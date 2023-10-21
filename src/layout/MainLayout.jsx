import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
  return (
    <div className=" bg-base-100  dark:bg-gray-800  text-gray-800 dark:text-gray-200">
      <Navbar></Navbar>

      <Outlet></Outlet>
      <div>
        <Toaster />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
