import { PencilIcon, QuoteIcon, TrashIcon } from "lucide-react";
import { Suspense } from "react";
import useFetch from "../../hook/useFetch";
import { useStore } from "react-redux";
import { Store, Reviews } from "../../profile.type";

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
  const store: Store = useStore();
  const { id } = store.getState().auth.user;
  const {
    data: reviewList,
    loading,
    error,
  }: {
    data: Reviews[];
    loading: boolean;
    error: string | undefined;
  } = useFetch({
    url: `${import.meta.env.VITE_API_URL}/reviews/${id}`,
  });
  console.log(typeof reviewList);
  if (reviewList) {
    console.log(reviewList.length);
  }
  if (reviewList && reviewList.length < 1) {
    return (
      <article className="flex flex-col gap-4">
        <div>
          <h1>Parece que no hay reseñas para mostrar.</h1>
        </div>
      </article>
    );
  }
  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<div className="skeleton card"></div>}>
        {loading && <div className="skeleton card"></div>}
        {(reviewList &&
          reviewList.map((review) => (
            <div key={review._id} className="card bg-base-100 border">
              <div className="card-body">
                <h2 className="card-title">{review.userName}</h2>
                <div>
                  <StarsInputs stars={review.rating} />
                  <span>{review.rating}</span>
                </div>
                <QuoteIcon className="w-6 h-6" />
                <p className="h-[12ch] overflow-hidden">{review.comment}</p>
                <div className="card-actions justify-between">
                  <span>
                    <strong>Publicado: </strong>{" "}
                    {new Date(review.updatedAt).toLocaleString()}
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
          ))) || (
          <>
            <span>
              {error ? "No hemos encontrado ninguna reseña." : "Cargando..."}
            </span>
          </>
        )}
      </Suspense>
    </article>
  );
}
