import { useParams } from "react-router-dom";
import FetchData from "../../components/hooks/FetchData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
    const {id} = useParams()
    const [updateData,setUpdateData]=useState([])
    const {allData,loading} = FetchData(`http://localhost:7001/brands/${id}`);

    useEffect(()=>{
        const filteredData = allData?.models?.find(data => data.name === id)
        setUpdateData(filteredData)
    },[allData,id])
if(loading){
    return <h2 className="text-center text-6xl">Loading.....</h2>
}
  const handleUpdateProduct = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newProduct = {};
    form.forEach((value, key) => {
      newProduct[key] = value;
    });

    try {
      const res = await fetch(`http://localhost:7001/brands/${id}`,{
        method:"PATCH",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(newProduct)
      });
      const result = res.json();
      if (result){
      toast.success('Updated successfully') 
      } 
      console.log(result);
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
                Update information {updateData?.name}
              </h3>
              <form
                onSubmit={handleUpdateProduct}
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
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="brandName"
                      name="brandName"
                      type="text"
                      defaultValue={updateData?.brandName}
                      placeholder="brandName"
                    />
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
                      defaultValue={updateData?.name}
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
                      defaultValue={updateData?.type}
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
                      defaultValue={updateData?.image}
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
                      type="text"
                      defaultValue={updateData?.price}
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
                      defaultValue={updateData?.color}
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
                      defaultValue={updateData?.fuelType}
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
                      type="text"
                      defaultValue={updateData?.year}
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
                      defaultValue={updateData?.engineSize}
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
                      type="text"
                      defaultValue={updateData?.cylinder}
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
                      defaultValue={updateData?.shortDescription}
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
                      type="text"
                      defaultValue={updateData?.rating}
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
                    defaultValue={updateData?.longDescription}
                    placeholder="longDescription"
                  />
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Product
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

export default UpdateProduct;
