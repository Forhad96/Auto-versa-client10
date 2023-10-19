import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Register/Login";
import SingUp from "../pages/Register/SingUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import CarsDetails from "../pages/CarsDetails/CarsDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Cart from "../pages/Cart/Cart";
import Cars from "../pages/Cars/Cars";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/cars/:id",
        element: <Cars></Cars>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path:"/cart",
        element:<Cart></Cart>
      },
      {
        path: "/carsDetails/:id",
        element: <CarsDetails></CarsDetails>,
      },

      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },
    ],
  },
]);

export default router;