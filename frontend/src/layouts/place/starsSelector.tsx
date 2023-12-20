import { useState } from "react";
import { Rating } from "react-daisyui";

export default function StarsSelector() {
  const [newRating, setNewRating] = useState<number>(1);

  return (
    <Rating value={newRating} onChange={setNewRating}>
      <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
      <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
      <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
      <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
      <Rating.Item name="rating-1" className="mask mask-star bg-orange-400" />
    </Rating>
  );
}
