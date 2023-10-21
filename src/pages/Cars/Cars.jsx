import { useParams } from "react-router-dom";
import useGetBrands from "../../components/hooks/useGetBrands";
import CarsCard from "./CarsCard";

import Loading from "../../components/Loading/Loading";
import CarsPromo from "./CarsPromo";
import NoProduct from "../NoProduct/NoProduct";

const Cars = () => {
  const { id } = useParams();
  const { brands, loading } = useGetBrands();
  const singleData = brands.find((brand) => brand._id === id);
  if (loading) {
    return <Loading></Loading>;
  }
  if (singleData.models.length <= 0) {
    return <NoProduct></NoProduct>;
  }
  return (
    <div className="md:mb-20">
      <CarsPromo></CarsPromo>
      <h1 className="text-6xl text-center my-4 md:my-8">Choose your Dream Car</h1>
      {/* brand cars */}
      <div className="grid mx-4 md:mx-8 md:grid-cols-2 lg:grid-cols-3">
        {singleData.models.map((model,idx) => (
          <CarsCard key={idx} model={model}></CarsCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
