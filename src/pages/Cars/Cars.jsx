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
  // if (singleData.models.length < 0) {
  //   return <NoProduct></NoProduct>;
  // }
  console.log(singleData.models.length);
  return singleData.models.length <= 0 ? (
    <NoProduct></NoProduct>
  ) : (
    <div>
      <CarsPromo></CarsPromo>
      {/* brand cars */}
      <div className="grid md:grid-cols-3">
        {singleData.models.map((model, idx) => (
          <CarsCard key={idx} model={model}></CarsCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
