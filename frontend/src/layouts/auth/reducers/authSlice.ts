import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface User {
    token: string,
    name: string
}

interface authState {
    user: User
}


// Define the initial state using that type
const initialState: authState = {
    user: {
        token: "",
        name: ""
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        }

    },
})

export const { setUser } = authSlice.actions

export default authSlice.reducer