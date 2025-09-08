import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
    name: 'John Doe',
    age: 999,
    email: 'johndoe@outlook.com'
}

// create the slice object
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateName: (state, action) => { state.name = action.payload },
        updateAge: (state,action) => { state.age = action.payload },
        updateEmail: (state, action) => { state.email = action.payload },
        updateNameAndAge: (state, action) => { state.name = action.payload.name; state.age = action.payload.age },
        resetAll: () => initialState
    }
})

export const { updateName, updateAge, updateEmail, updateNameAndAge, resetAll } = userSlice.actions

export default userSlice.reducer