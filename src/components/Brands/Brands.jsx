
import FetchData from "../hooks/FetchData";
import useGetBrands from "../hooks/useGetBrands";
import BrandsCard from "./BrandsCard";


const Brands = () => {
  const {brands,loading} = useGetBrands();
  // const { brands, loading } = FetchData("http://localhost:7001/brands");
  if(loading){
    return <h2 className="text-5xl text-center">Loading</h2>
  }
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {brands.map((brand,idx) => (
        <BrandsCard brand={brand} key={idx}></BrandsCard>
      ))}
    </div>
  );
};

export default Brands;
