import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BrandsCard = ({ brand }) => {

const navigate = useNavigate()
  const handleBrandCars =(_id)=>{
    navigate(`/cars/${_id}`)

  }
  return (
    <div
      onClick={() => handleBrandCars(`${brand._id}`)}
      
      className=" m-4 relative overflow-hidden bg-slate-600 bg-blend-darken rounded-lg max-w-ful shadow-lg group"
    >
      <svg
        className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
        viewBox="0 0 375 283"
        fill="none"
        style={{ opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y={175}
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width={152}
          height={152}
          rx={8}
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        ></div>
        <img
          className="relative w-40 object-cover"
          src="https://cdn.pixabay.com/photo/2016/08/15/18/18/bmw-1596080_1280.png"
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{brand.brand}</span>
          <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            update
          </span>
        </div>
      </div>
    </div>
  );
};
BrandsCard.propTypes= {
  brand:PropTypes.object.isRequired,
}
export default BrandsCard;
