import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface User {
    token: string,
    id: string,
    email: string,
    address: string,
    phone: string,
    firstname: string,
    lastname: string,
}


interface authState {
    user: User | null
}


// Define the initial state using that type
const initialState: authState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        clearToken(state) {
            state.user = null
        }
    },
})

export const { setUser, clearToken } = authSlice.actions

export default authSlice.reducer