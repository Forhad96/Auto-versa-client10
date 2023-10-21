import Loading from "../Loading/Loading";
import FetchData from "../hooks/FetchData";
import useGetBrands from "../hooks/useGetBrands";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const { brands, loading } = useGetBrands();
  // const { brands, loading } = FetchData("https://auto-versa-server.vercel.app/brands");
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-10 bg-base-100 mx-8 dark:bg-gray-800  text-gray-800 dark:text-gray-200">
      <h1 className="text-center text-5xl my-5">All Brands</h1>
      <div className="grid md:grid-cols-3 gap-5">
        {brands.map((brand, idx) => (
          <BrandsCard brand={brand} key={idx}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
