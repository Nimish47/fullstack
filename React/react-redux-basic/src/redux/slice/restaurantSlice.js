import { createSlice } from '@reduxjs/toolkit';

const initialState = { badHits: 0, numofRefills: 0 }

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        strangeOrdersDetected: (state) => { state.badHits++ },
        refillStock: (state) => { state.numofRefills += 2 },
        refillStockSwiggy: (state) => { state.numofRefills++ },
        refillStockZomato: (state) => { state.numofRefills++ }
    }
})

export const {
    strangeOrdersDetected,
    refillStock,
    refillStockSwiggy,
    refillStockZomato
} = restaurantSlice.actions

export default restaurantSlice.reducer;