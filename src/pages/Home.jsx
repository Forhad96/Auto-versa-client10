import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Faq from "../components/Faq/Faq";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct";
import Testimonial from "../components/Testimonial/Testomoial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <FeaturedProduct></FeaturedProduct>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
