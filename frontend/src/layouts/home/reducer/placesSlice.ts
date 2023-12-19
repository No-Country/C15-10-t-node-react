import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface placesState {
    places: string[]
}

// Define the initial state using that type
const initialState: placesState = {
    places: []
}

export const placesSlice = createSlice({
    name: 'places',
    initialState,
    reducers: {
        setPlaces: (state, action: PayloadAction<string[]>) => {
            state.places = action.payload
        }

    },
})

export const { setPlaces } = placesSlice.actions

export default placesSlice.reducer