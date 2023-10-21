import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import Faq from "../components/Faq/Faq";
import OurServices from "../components/OurServices/OurServices";
import Testimonial from "../components/Testimonial/Testomoial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <OurServices></OurServices>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default Home;
