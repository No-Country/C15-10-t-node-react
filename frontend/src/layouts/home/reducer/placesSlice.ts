import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Place {
    id: string;
    name: string;
    description: string;
    imgs: string[];
    coords: number[];
    reviews: string[];
}

interface placesState {
    places: Place[]
    place: Place
}

// Define the initial state using that type
const initialState: placesState = {
    places: [],
    place: {} as Place
}

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setPlaces: (state, action: PayloadAction<Place[]>) => {
            state.places = action.payload
        },
        setPlace: (state, action: PayloadAction<Place>) => {
            state.place = action.payload
        },
        updatePlaceReviews: (state, action: PayloadAction<string[]>) => {
            state.place.reviews.push(...action.payload)
        }

    },
})

export const { setPlaces, setPlace, updatePlaceReviews } = placesSlice.actions

export default placesSlice.reducer