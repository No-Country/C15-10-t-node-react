import { useState, useEffect } from "react";

import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { Place } from "../../layouts/home/reducer/placesSlice";
import renderStars from "../../utils/startsHelper";

type PlaceObj = Place

function CardContent({ place }: {place: PlaceObj}) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [average, setAverage] = useState(4.5);
  useEffect(() => {
    if (place.reviews.length === 0) {
      return;
    }
    const rating =
    place.reviews.reduce((a, b) => {
      return a + b.rating;
    }, 0) / place.reviews.length || 1;
    setAverage(rating)
  }, [place.reviews])
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  

  return (
    <div className="card card-compact w-full bg-green-600 shadow-xl mt-3 md:h-96 h-[23rem] mx-1">
      <figure className="relative overflow-hidden group">
        <img
          src={place.imgs[0]}
          alt={place.name}
          className="w-full h-44 object-cover transition-transform transform-gpu group-hover:scale-105"
        />
        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      </figure>
      <div className="card-body h-16">
        <h2 className="card-title text-green-50 md:text-xl sm:text-lg text-base">
          {place.name}
        </h2>
      </div>
      <p className="text-white pb-1 md:text-base text-sm">
        <strong className="text-green-100">
          {place.description.substring(0, 50)}
        </strong>
      </p>

      <div className="p-4">
        <div className="card-actions">
          <div className="flex flex-row items-center sm:text-base text-sm">
            {renderStars(average)}
            <span className="ml-1"><b>{average}</b></span>
          </div>
        </div>
        <p className="text-white pb-1 md:text-lg text-sm">
          Desde <strong className="text-green-100">$1000</strong> por adulto
        </p>
        <div className="card-actions">
          <button className="btn btn-block bg-green-400 text-green-950 hover:bg-green-300 hover:text-green-950 border-0 rounded-xl">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardContent;
