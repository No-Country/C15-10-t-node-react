import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Place } from "../../home/reducer/placesSlice";

export interface Review {
  _id: string;
  place: Place;
  user: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  comment: string;

}

interface reviewState {
  reviews: Review[];
}

// Define the initial state using that type
const initialState: reviewState = {
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action: PayloadAction<Review[]>) => {
      state.reviews = action.payload;
    },
    updateReview: (state, action: PayloadAction<Review>) => {
      const index = state.reviews.findIndex(
        (review) => review._id === action.payload._id
      );
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    },
    destroyReview: (state, action: PayloadAction<string>) => {
      state.reviews = state.reviews.filter(
        (review) => review._id !== action.payload
      );
    },
  },
});

export const { setReviews, updateReview, destroyReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
