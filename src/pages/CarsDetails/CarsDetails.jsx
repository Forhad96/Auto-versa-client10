import { useNavigate, useParams } from "react-router-dom";
// import useGetBrands from "../../components/hooks/useGetBrands";
// import { useState } from "react";
// import { useEffect } from "react";
import FetchData from "../../components/hooks/FetchData";
import Loading from "../../components/Loading/Loading";
import Slider from "../../components/Slider/Slider";
import toast from "react-hot-toast";

const CarsDetails = () => {
  const { id } = useParams();
  // const { brands, loading } = useGetBrands();
  const navigate = useNavigate()

  const { allData, loading } = FetchData(
    `https://auto-versa-server.vercel.app/brands/${id}`
  );
  const car = allData.models?.find((model) => model.name === id);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleAddCart = () => {
    fetch(`https://auto-versa-server.vercel.app/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast.success('successfully added')
        navigate('/cart')
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const images = [
    "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158704_1280.png",
    "https://cdn.pixabay.com/photo/2019/12/19/18/50/car-4706844_1280.png",
    "https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703_1280.png",
  ];
  return (
    <section className="py-20 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8  md:w-1/2 md:mb-0">
            <div className="sticky top-0 z-50 overflow-hidden ">
              <Slider images={images}></Slider>

              <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                <div className="flex items-center justify-center mt-6">
                  <span className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-sm font-bold text-gray-700 lg:text-lg dark:text-gray-400">
                      Have question about buying an
                    </h2>
                    <a
                      className="text-xs text-blue-400 lg:text-sm dark:text-blue-200"
                      href="#"
                    >
                      Chat with an specialist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <span className="text-red-500 text-xl font-bold dark:text-red-200">
                  {car?.brandName}
                </span>
                <h2 className="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                  {car?.name}
                </h2>
                <p className="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                  {car?.longDescription}
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline dark:text-gray-400"
                >
                  See how trade-in works
                </a>
              </div>
              <div className="">
                <p className="mb-4 text-lg font-semibold dark:text-gray-400">
                  Choose your desire color
                </p>
                <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-emerald-400"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Pearl Green
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-gray-700 rounded-full dark:bg-gray-600"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Mattee Black
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Red
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-stone-200"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Silver
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-500 hover:border-blue-400">
                      <div>
                        <div className="w-8 h-8 mx-auto mb-2 bg-blue-200 rounded-full"></div>
                        <p className="text-xs text-center text-gray-700 dark:text-gray-400">
                          Sierra Blue
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-2 text-lg font-semibold dark:text-gray-400">
                  Specification
                </p>

                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div className="mb-2 font-semibold dark:text-gray-400">
                        Engine: 3.3L V6, Horse power: 181
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div className="mb-2 font-semibold dark:text-gray-400">
                        Fuel_efficiency: 28{" "}
                        <span className="text-xs">
                          mpg city / 34 mpg highway
                        </span>
                      </div>
                    </button>
                  </div>

                  <div>
                    <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div className="mb-2 font-semibold dark:text-gray-400">
                        Price range: $24,885 - $36,300
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="mb-4 text-lg font-semibold dark:text-gray-400">
                  Choose a payment option
                </p>
                <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                  <div>
                    <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p className="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay in full
                        </p>
                      </div>
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-blue-400 dark:border-gray-600 hover:border-blue-400">
                      <div>
                        <p className="px-2 text-base font-semibold text-center text-gray-700 dark:text-gray-400">
                          Pay monthly
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="flex flex-wrap items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-truck"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Delivery
                  </h2>
                </div>
                <div className="px-7">
                  <p className="mb-2 text-sm dark:text-gray-400">In Stock</p>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    Free Shipping
                  </p>
                  <a
                    className="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Get delivery dates
                  </a>
                </div>
              </div>
              <div className="mt-6 ">
                <div className="flex flex-wrap items-center">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </span>
                  <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                    Pickup
                  </h2>
                </div>
                <div className="px-7">
                  <a
                    className="mb-2 text-sm text-blue-400 dark:text-blue-200"
                    href="#"
                  >
                    Check availability
                  </a>
                </div>
              </div>
              <div className="mt-6 ">
                <button
                  onClick={handleAddCart}
                  className="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500"
                >
                  Add Cart
                </button>
              </div>
              <div className="flex items-center mt-6 ">
                <div>
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Still deciding?
                  </h2>
                  <p className="mb-2 text-sm dark:text-gray-400">
                    {" "}
                    Add this item to a list and easily come back to it later{" "}
                  </p>
                </div>
                <span className="ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsDetails;
