import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newProduct = {};
    form.forEach((value, key) => {
      newProduct[key] = value;
    });
    const { brandName } = newProduct;

    try {
      const res = await fetch(
        `https://auto-versa-server.vercel.app/brands/${brandName}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );
      const result = res.json();
      console.log(result);
      if (result) {
        toast.success("Product add successful");
        event.target.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-full bg-gray-400 dark:bg-gray-900">
        {/* Container */}
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            {/* Row */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                Add Listing product
              </h3>
              <form
                onSubmit={handleAddProduct}
                className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
              >
                {/* row */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="brandName"
                    >
                      Brand Name
                    </label>
                    {/* <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="brandName"
                        name="brandName"
                        type="text"
                        placeholder="brandName"
                      /> */}
                    <select
                      name="brandName"
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                      <option disabled defaultValue={"Select"}>
                        Select Brand?
                      </option>
                      <option>Volkswagen</option>
                      <option>BMW</option>
                      <option>Tesla</option>
                      <option>Toyota</option>
                      <option>Ford</option>
                      <option>Honda</option>
                    </select>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="type"
                    >
                      Type
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="type"
                      name="type"
                      type="text"
                      placeholder="type"
                    />
                  </div>
                </div>

                {/* row */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="image"
                    >
                      Image Url
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="image"
                      name="image"
                      type="text"
                      placeholder="image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="price"
                      name="price"
                      type="number"
                      placeholder="price"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="color"
                    >
                      Color
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="color"
                      name="color"
                      type="text"
                      placeholder="color"
                    />
                  </div>
                </div>
                {/* row */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="fuelType"
                    >
                      Fuel Type
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="fuelType"
                      name="fuelType"
                      type="text"
                      placeholder="fuelType"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="year"
                    >
                      Year
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="year"
                      name="year"
                      type="number"
                      placeholder="year"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="engineSize"
                    >
                      Engine Size
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="engineSize"
                      name="engineSize"
                      type="text"
                      placeholder="engineSize"
                    />
                  </div>
                </div>
                {/* row */}
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="cylinder"
                    >
                      Cylinder
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="cylinder"
                      name="cylinder"
                      type="number"
                      placeholder="cylinder"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="shortDescription"
                    >
                      Short Description
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="shortDescription"
                      name="shortDescription"
                      type="text"
                      placeholder="shortDescription"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="rating"
                    >
                      Ratings
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="rating"
                      name="rating"
                      type="number"
                      placeholder="rating"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    htmlFor="longDescription"
                  >
                    Long Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="longDescription"
                    type=""
                    name="longDescription"
                    placeholder="longDescription"
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
