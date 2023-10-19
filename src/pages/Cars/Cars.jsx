import { useParams } from "react-router-dom";
import useGetBrands from "../../components/hooks/useGetBrands";
import CarsCard from "./CarsCard";
import Slider from "../../components/Slider/Slider";



const Cars = () => {
    const {id} =useParams()
    const {brands,loading}= useGetBrands()
    if(loading){
        return <p>Loading......</p>
    }
const singleData = brands.find(brand => brand._id === id)


const images = [
  "https://cdn.pixabay.com/photo/2020/07/11/13/23/mercury-5393997_1280.png" ,
  "https://cdn.pixabay.com/photo/2015/05/08/23/45/austro-759074_1280.jpg",
  "https://cdn.pixabay.com/photo/2012/04/26/14/04/car-42552_1280.png",

];

    return (
      <div>
        <div>

          <Slider images={images}></Slider>
        </div>
        {/* brand cars */}
        <div className="grid grid-cols-2">
          {singleData.models.map((model) => (
            <CarsCard key={model.id} model={model}></CarsCard>
          ))}
        </div>
      </div>
    );
};

export default Cars;