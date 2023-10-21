const OurServices = () => {
  return (
    <>
      <div className="container relative flex flex-col justify-between h-full mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl text-center font-extrabold leading-tight ">
          Services
        </h2>
        <p className="mb-12 text-lg text-center">
          Here is a few of the awesome Services we provide.
        </p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 dark:bg-transparent dark:text-white  rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-transparent border-2 border-blue-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold">Car Sales</h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-500 dark:text-white uppercase">
                    ------------
                  </p>
                  <p className="mb-2 ">
                    Discover a wide range of high-quality cars in our inventory.
                    From new models to reliable used cars, we have the perfect
                    vehicle for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 dark:bg-transparent dark:text-white  rounded-lg" />
                <div className="relative h-full p-5 bg-white  dark:bg-transparent   border-2  border-blue-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold">
                      Car Financing
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-500 dark:text-white uppercase">
                    ------------
                  </p>
                  <p className="mb-2">
                    We offer flexible financing options to make your dream car a
                    reality. Our financing experts will work with you to find
                    the best solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 dark:bg-transparent dark:text-white  rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-transparent border-2 border-blue-400 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                      Car Maintenance
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 dark:text-white uppercase">
                    ------------
                  </p>
                  <p className="mb-2">
                    Keep your car running smoothly with our professional
                    maintenance services. From oil changes to major repairs,
                    we&rsquo;ve got you covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <div className="relative h-full ml-0 mr-0 sm:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 dark:bg-transparent dark:text-white  rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-transparent border-2 border-blue-400  rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold ">
                      Car Trade-Ins
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-400 dark:text-white uppercase">
                    ------------
                  </p>
                  <p className="mb-2 ">
                    Looking to upgrade your car? We accept trade-ins, allowing
                    you to trade your current vehicle for a newer model.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="relative h-full ml-0 md:mr-10">
                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-500 dark:bg-transparent dark:text-white  rounded-lg" />
                <div className="relative h-full p-5 bg-white dark:bg-transparent border-2 border-blue-500 rounded-lg">
                  <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold ">
                      Test Drives
                    </h3>
                  </div>
                  <p className="mt-3 mb-1 text-xs font-medium text-blue-500 dark:text-white uppercase">
                    ------------
                  </p>
                  <p className="mb-2">
                    Get behind the wheel and experience your desired car with a
                    test drive. We make it easy for you to make an informed
                    decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
