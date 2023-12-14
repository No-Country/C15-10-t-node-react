import { PencilIcon, QuoteIcon, TrashIcon } from "lucide-react";
import { reviews } from "./review";
import { Suspense } from "react";

function StarsInputs({ stars }: { stars: number }) {
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

export default function ReviewList() {
  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<div className="skeleton card"></div>}>
        {reviews &&
          reviews.map((review) => (
            <div className="card bg-base-100 border">
              <div className="card-body">
                <h2 className="card-title">{review.userName}</h2>
                <div>
                  <StarsInputs stars={review.stars} />
                  <span>{review.stars}</span>
                </div>
                <QuoteIcon className="w-6 h-6" />
                <p className="h-[12ch] overflow-hidden">{review.comments}</p>
                <div className="card-actions justify-between">
                  <span>
                    <strong>Published at: </strong> {review.published}
                  </span>
                  <div className="flex gap-2">
                    <button className="rounded-full btn-outline btn btn-primary">
                      <PencilIcon />
                    </button>
                    <button className="rounded-full btn-outline btn btn-error">
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Suspense>
    </article>
  );
}
