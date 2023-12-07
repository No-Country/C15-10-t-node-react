import { FaRegHeart, FaHeart } from "react-icons/fa";

interface FavoriteButtonProps {
  onClick: () => void;
  isFavorite: boolean;
}

function FavoriteButton({
  isFavorite,
  onClick,
}: Readonly<FavoriteButtonProps>) {
  return (
    <div className="absolute top-1 right-2 p-2 bg-green-50 rounded-full">
      {isFavorite ? (
        <FaRegHeart
          color="black"
          className="cursor-pointer text-xl"
          onClick={onClick}
        />
      ) : (
        <FaHeart
          color="red"
          className="cursor-pointer text-xl"
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default FavoriteButton;
