//import renderStars from "../../../../utils/startsHelper";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPlace } from "../../../home/reducer/placesSlice";
import Place from "../../../place/Place";

const PlaceCard = ({ place }: { place: Place }) => {
  const dispatch = useDispatch();
  if (!place || !place.imgs) {
    return null;
  }
  return (
    <div className="flex items-center justify-between md:px-4 py-3 px-2.5">
      <div className="relative w-full md:w-96 mx-auto lg:h-36 overflow-hidden">
        <img
          src={place.imgs[0]}
          alt={place.name}
          className="w-full h-auto md:h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 flex flex-col justify-end sm:p-8 py-3 px-2">
          <div className="z-10">
            <h3 className="sm:text-lg text-base font-bold text-white">
              <Link to={`/place/${place.id}`}>{place.name}</Link>
            </h3>
          </div>
        </div>
      </div>
      <div className="md:ml-4 ml-2 w-full mx-auto lg:h-36 overflow-hidden">
        {/* 
        <h3 className="md:text-xl sm:text-lg text-base font-bold">
          {place.name}
        </h3>
        
        <div className="flex flex-row items-center sm:text-base text-sm">
          {renderStars(rating)}
          <span className="ml-1">{rating}</span>
        </div> */}

        <p className="sm:mt-2 mt-1 font-bold text-3xl">
          <Link
            to={`/place/${place.id}`}
            onClick={() => {
              dispatch(setPlace(place));
            }}
          >
            {place.name}
          </Link>
        </p>

        <div className="sm:mt-2 mt-1 truncate sm:text-base text-sm">
          {place.description}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
