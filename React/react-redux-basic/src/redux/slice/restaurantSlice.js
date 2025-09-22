import { createSlice } from '@reduxjs/toolkit';

const initialState = { badHits: 0, numofRefills: 0 }

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        strangeOrdersDetected: (state) => { state.badHits = state.badHits + 1 },
        refillStock: (state) => { state.numofRefills = state.numofRefills + 2 },
        refillStockSwiggy: (state) => { state.numofRefills = state.numofRefills + 1 },
        refillStockZomato: (state) => { state.numofRefills = state.numofRefills + 1 }
    }
})

export const {
    strangeOrdersDetected,
    refillStock,
    refillStockSwiggy,
    refillStockZomato
} = restaurantSlice.actions

export default restaurantSlice.reducer;