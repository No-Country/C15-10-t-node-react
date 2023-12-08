import { useState } from "react";
import { Star } from "lucide-react";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface CardContentProps {
  name: string;
  location: string;
  image: string;
  rating: number;
  price: number;
}

function CardContent({
  name,
  location,
  image,
  rating,
  price,
}: Readonly<CardContentProps>) {
  const [isFavorite, setIsFavorite] = useState(true);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card card-compact md:w-72 w-56 bg-green-600 shadow-xl mx-1 mt-3 md:h-96 h-80">
      <figure className="relative overflow-hidden group">
        <img
          src={image}
          alt={location}
          className="w-full transition-transform transform-gpu group-hover:scale-105"
        />
        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      </figure>
      <div className="card-body h-16">
        <h2 className="card-title text-green-50 text-xl">
          {name} , {location}
        </h2>
      </div>
      <div className="p-4">
        <div className="card-actions">
          <div className="flex items-center">
            <Star color="yellow" size={17} />
            <Star color="yellow" size={17} />
            <Star color="yellow" size={17} />
            <Star color="yellow" size={17} />
            <p className="text-base text-gray-200 mx-1">{rating}</p>
          </div>
        </div>
        <p className="text-white pb-1">
          Desde <strong className="text-green-100">${price}</strong> por adulto
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
