
import Slider from "../../components/Slider/Slider";
const CarsPromo = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158704_1280.png",
    "https://cdn.pixabay.com/photo/2019/12/19/18/50/car-4706844_1280.png",
    "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png",
  ];
    return (
      <section className="px-3 mx-4 py-5 lg:py-10">
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
            <div className="h-80 max-w-md md:max-w-xl">
              <Slider images={images}></Slider>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CarsPromo;