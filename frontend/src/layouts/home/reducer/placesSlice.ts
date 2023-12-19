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
}

// Define the initial state using that type
const initialState: placesState = {
    places: []
}

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setPlaces: (state, action: PayloadAction<Place[]>) => {
            state.places = action.payload
        }

    },
})

export const { setPlaces } = placesSlice.actions

export default placesSlice.reducer