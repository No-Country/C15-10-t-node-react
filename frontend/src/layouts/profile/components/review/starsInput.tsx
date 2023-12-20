export default function StarsInputs({ stars }: { stars: number }) {
  return (
    <div className="rating rating-xs">
      {[...Array(5)].map((_, index) => {
        const isChecked = index === Math.floor(stars) - 1;
        const quantity = isChecked ? stars : 1;
        return (
          <input
            key={index}
            type="radio"
            name={`rating-${index + stars + 1}`}
            className="mask mask-star-2 bg-orange-400"
            checked={isChecked}
            value={quantity}
            disabled
          />
        );
      })}
    </div>
  );
}
