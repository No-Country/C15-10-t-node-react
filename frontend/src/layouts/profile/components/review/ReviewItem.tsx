import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { CheckIcon, PencilIcon, QuoteIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";
import { destroyReview, updateReview } from "../../reducer/reviewsSlice";
import { Rating } from "react-daisyui";
import StarsInputs from "./starsInput";
import { Place } from "../../../home/reducer/placesSlice";

interface User {
    token: string,
    id: string,
    email: string,
    address: string,
    phone: string,
    firstname: string,
    lastname: string,
}

export interface Review {
    _id: string;
    place: Place;
    user: User;
    rating: number;
    createdAt: string;
    updatedAt: string;
    comment: string;
}

function ReviewItem({ item }: { item: Review }) {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);
    const [toggle, setToggle] = useState(false);
    const [changes, setChanges] = useState(item.comment);
    const [newRating, setNewRating] = useState<number>(1);

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
                        Authorization: `Bearer ${user?.token}`,
                    },
                }
            );
            console.log(id)
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
                    Authorization: `Bearer ${user?.token}`,
                },
            });
            dispatch(destroyReview(id));
            setToggle(!toggle);
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div key={item._id} className="card bg-base-100 border">
            <div className="card-body">
                <h2 className="card-title">
                    {user?.firstname} {user?.lastname}
                </h2>
                <div className="flex gap-3">
                    <h3 className="font-bold">{item.place.name}</h3>
                    <div className="flex items-center gap-3">
                        <StarsInputs stars={item.rating} />
                        <span>{item.rating}</span>
                    </div>
                </div>
                <div className="flex items-start  gap-10">
                    <img
                        className="w-48 h-48 object-cover"
                        src={item.place.imgs[0]}
                        alt={item.place.name}
                    />


                    <div className="flex flex-col w-full justify-between gap-2">


                        <QuoteIcon className="w-6 h-6" />
                        {toggle ? (
                            <div className="flex flex-col gap-5">
                                <textarea
                                    className="textarea textarea-bordered"
                                    name="updatedComment"
                                    defaultValue={item.comment}
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
                            <p className="h-[12ch] overflow-hidden">{item.comment}</p>
                        )}
                        <div className="card-actions justify-between items-baseline">
                            <span>
                                <strong>Publicado: </strong>{" "}
                                {new Date(item.updatedAt).toLocaleString()}
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
                                            onClick={() => handleDelete(item._id)}
                                            className="rounded-full btn-outline btn btn-error"
                                        >
                                            <TrashIcon />
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="rounded-full btn-outline btn btn-success"
                                            onClick={() => handleUpdate(item._id)}
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
            </div>
        </div>
    )
}

export default ReviewItem