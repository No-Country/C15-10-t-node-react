import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


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
  place: string;
  user: User;
  rating: number;
  createdAt: string;
  updatedAt: string;
  comment: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  imgs: string[];
  coords: number[];
  reviews: Review[];
}

interface placesState {
  places: Place[];
  place: Place;
}

// Define the initial state using that type
const initialState: placesState = {
  places: [],
  place: {} as Place,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<Place[]>) => {
      state.places = action.payload;
    },
    setPlace: (state, action: PayloadAction<Place>) => {
      state.place = action.payload;
    },
    updatePlaceReviews: (state, action: PayloadAction<Review>) => {
      state.place.reviews.push(action.payload);
      state.place.reviews = state.place.reviews.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    },
  },
});

export const { setPlaces, setPlace, updatePlaceReviews } = placesSlice.actions;

export default placesSlice.reducer;
