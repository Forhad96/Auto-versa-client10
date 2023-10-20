import { useParams } from "react-router-dom";
import useGetBrands from "../../components/hooks/useGetBrands";
import CarsCard from "./CarsCard";

import Loading from "../../components/Loading/Loading";
import CarsPromo from "./CarsPromo";



const Cars = () => {
    const {id} =useParams()
    const {brands,loading}= useGetBrands()
    if(loading){
        return (
          <Loading></Loading>
        );

    }
const singleData = brands.find(brand => brand._id === id)




    return (
      <div>

        <CarsPromo></CarsPromo>
        {/* brand cars */}
        <div className="grid md:grid-cols-3">
          {singleData.models.map((model) => (
            <CarsCard key={model.id} model={model}></CarsCard>
          ))}
        </div>
      </div>
    );
};

export default Cars;