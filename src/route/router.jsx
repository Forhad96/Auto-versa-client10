import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import BrandCars from "../pages/BrandCars/BrandCars";
import Login from "../pages/Register/Login";
import SingUp from "../pages/Register/SingUp";
import AddProduct from "../pages/AddProduct/AddProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path:'/cars/:id',
        element:<BrandCars></BrandCars>,

      },
  
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singUp',
        element:<SingUp></SingUp>
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>
        
      }
    ],
  },
]);

export default router;