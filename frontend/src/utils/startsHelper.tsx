import { BsStarFill, BsStarHalf } from "react-icons/bs";

const renderStars = (rating: number) => {
  const stars = [];
  const integerPart = Math.floor(rating);
  const hasDecimal = rating % 1 !== 0;

  for (let i = 0; i < integerPart; i++) {
    stars.push(<BsStarFill key={i} className="text-yellow-500" />);
  }

  if (hasDecimal) {
    stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
  }

  return stars;
};

export default renderStars;
