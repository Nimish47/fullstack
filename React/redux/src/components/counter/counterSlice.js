import { createSlice } from "@reduxjs/toolkit";

// set initial state
const initialState = {
    val: 0
}

// create the slice object
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.val = state.val + 1 },
        decrement: state => { state.val = state.val - 1 },
        custom: (state, action) => { state.val = state.val + action.payload }
    }
})

// print the slice object
console.log('Slice object', counterSlice)

// "const" type export
// this export will be used in components
export const { increment, decrement, custom } = counterSlice.actions

// "default" type export
// this export will be used in store.js
export default counterSlice.reducer