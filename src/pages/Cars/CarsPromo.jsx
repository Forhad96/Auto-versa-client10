
import Slider from "../../components/Slider/Slider";
const CarsPromo = () => {
    const images = [
      "https://cdn.pixabay.com/photo/2020/07/11/13/23/mercury-5393997_1280.png",
      "https://cdn.pixabay.com/photo/2015/05/08/23/45/austro-759074_1280.jpg",
      "https://cdn.pixabay.com/photo/2012/04/26/14/04/car-42552_1280.png",
    ];
    return (
      <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">
              25% OFF
            </p>
            <p className="text-4xl font-bold md:text-7xl">SUMMER SALE</p>
            <p className="mt-2 text-sm md:text-lg">For limited time only!</p>
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              Shop Now
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="h-80 max-w-xl">
              <Slider images={images}></Slider>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CarsPromo;