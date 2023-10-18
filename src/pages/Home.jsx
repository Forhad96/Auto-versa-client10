
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Cards from "./Cards";
import CarsDetails from "./CarsDetails/CarsDetails";
import ProductCard from "./ProductCard";



const Home = () => {




    return (
      <div>
        <Banner></Banner>
        <Brands></Brands>

        <Cards></Cards>
        <CarsDetails></CarsDetails>
        <ProductCard></ProductCard>
      </div>
    );
};

export default Home;