import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="mx-10">
            <Navbar></Navbar>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;