import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BrandCars from "../pages/BrandCars/BrandCars";
import Login from "../pages/Register/Login";
import SingUp from "../pages/Register/SingUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import CarsDetails from "../pages/CarsDetails/CarsDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
        element: <BrandCars></BrandCars>,
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
        path: "/carsDetails/:id",
        element: <CarsDetails></CarsDetails>,
      },
    ],
  },
]);

export default router;