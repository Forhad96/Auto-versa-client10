import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarsCard = ({ model }) => {
  const handleCarDetails = (name) => {
    fetch(`https://auto-versa-server.vercel.app/brands/${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleUpdate =(name)=>{
  //   console.log(name);
  // }
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
      <div className="flex px-3 py-3">
        <div className="max-w-full rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://cdn.pixabay.com/photo/2017/11/09/09/43/wiesmann-gt-mf4-2932846_1280.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="">
              <div className="flex items-center justify-between">
                <div className="font-bold text-xl mb-2">{model.name}</div>
                <span className="inline-block bg-blue-200 text-blue-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  Year:-{model?.year}
                </span>
              </div>
              <p className=" text-md font-medium">{model.shortDescription}</p>

              <div className="mt-1">
                <span> Price: {model.price}</span>
                <span className="text-gray-600 text-sm">$</span>
              </div>
              <div className="mt-1">
                <span> Fuel Type:-{model?.fuelType}</span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-blue-600 font-semibold">
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span></span>
                    <span className="ml-2 text-gray-600 text-sm">
                      34 reviews
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-6 gap-6">
            <Link to={`/carsDetails/${model.name}`}>
              <button
                onClick={() => handleCarDetails(model.name)}
                className="inline-block px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded active:text-blue-500 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring"
                href="/download "
              >
                view details
              </button>
            </Link>
            <Link to={`/updateProduct/${model.name}`}>
              <button
                // onClick={() => handleUpdate(model.name)}
                className="inline-block px-12 py-3 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white active:bg-blue-500 focus:outline-none focus:ring"
              >
                Update Details
              </button>
            </Link>
          </div>

          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Engine Size:-{model?.engineSize}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              Cylinder:-{model?.cylinder}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
CarsCard.propTypes = {
  model: PropTypes.object.isRequired,
};
export default CarsCard;
