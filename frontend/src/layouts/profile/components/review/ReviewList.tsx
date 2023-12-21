import { CheckIcon, PencilIcon, QuoteIcon, TrashIcon, X } from "lucide-react";
import { Suspense, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Store } from "../../profile.type";
import { destroyReview, updateReview } from "../../reducer/reviewsSlice";
import axios from "axios";
import { RootState } from "../../../../store/store";
import { Rating } from "react-daisyui";
import StarsInputs from "./starsInput";

export default function ReviewList() {
  const [toggle, setToggle] = useState(false);
  const [changes, setChanges] = useState("");
  const [newRating, setNewRating] = useState<number>(1);

  const dispatch = useDispatch();
  const reviews = useSelector((state: RootState) => state.places.place.reviews);
  const store: Store = useStore();
  const { firstname, lastname, token } = store.getState().auth.user;

  if (!reviews) {
    return (
      <article className="flex flex-col gap-4">
        <div>
          <h1>Parece que no hay reseñas para mostrar.</h1>
        </div>
      </article>
    );
  }

  const toggleUpdate = () => {
    setToggle(!toggle);
  };

  const handleUpdate = async (id: string) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/reviews/${id}`,
        {
          comment: changes,
          rating: newRating,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(updateReview(response.data));
      setToggle(!toggle);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_URL}/reviews`,
        data: {
          commentId: id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(destroyReview(id));
      setToggle(!toggle);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <article className="flex flex-col gap-4">
      <Suspense fallback={<div className="skeleton card"></div>}>
        {/* {loading && <div className="skeleton card"></div>} */}
        {reviews &&
          reviews.map((review) => (
            <div key={review._id} className="card bg-base-100 border">
              <div className="card-body">
                <h2 className="card-title">
                  {firstname} {lastname}
                </h2>
                <div className="flex ">
                  <h3></h3>
                  <div>
                    <StarsInputs stars={review.rating} />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <QuoteIcon className="w-6 h-6" />
                {toggle ? (
                  <div className="flex flex-col gap-2">
                    <textarea
                      className="textarea textarea-bordered"
                      name="updatedComment"
                      defaultValue={review.comment}
                      onChange={(e) => setChanges(e.target.value)}
                    ></textarea>
                    <Rating value={newRating} onChange={setNewRating}>
                      <Rating.Item
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                      />
                      <Rating.Item
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                      />
                      <Rating.Item
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                      />
                      <Rating.Item
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                      />
                      <Rating.Item
                        name="rating-1"
                        className="mask mask-star bg-orange-400"
                      />
                    </Rating>
                  </div>
                ) : (
                  <p className="h-[12ch] overflow-hidden">{review.comment}</p>
                )}
                <div className="card-actions justify-between">
                  <span>
                    <strong>Publicado: </strong>{" "}
                    {new Date(review.updatedAt).toLocaleString()}
                  </span>
                  <div className="flex gap-2">
                    {!toggle ? (
                      <>
                        <button
                          className="rounded-full btn-outline btn btn-primary"
                          onClick={toggleUpdate}
                        >
                          <PencilIcon />
                        </button>
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="rounded-full btn-outline btn btn-error"
                        >
                          <TrashIcon />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="rounded-full btn-outline btn btn-success"
                          onClick={() => handleUpdate(review._id)}
                        >
                          <CheckIcon />
                        </button>
                        <button
                          className="rounded-full btn-outline btn btn-error"
                          onClick={toggleUpdate}
                        >
                          <X />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Suspense>
    </article>
  );
}
