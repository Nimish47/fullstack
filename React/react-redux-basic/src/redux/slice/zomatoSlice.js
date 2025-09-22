import { createSlice } from '@reduxjs/toolkit';
import { refillStock, refillStockZomato } from './restaurantSlice';

const initialState = { fishAndChips: 100, beer: 400, orders: 0 }

const zomatoSlice = createSlice({
    name: 'zomatoOrder',
    initialState,
    reducers: {
        orderFishAndChips: (state, action) => { state.fishAndChips = state.fishAndChips - action.payload },
        orderBeer: (state, action) => { state.beer = state.beer - action.payload },
        updateNumOfOrders: (state) => { state.orders = state.orders + 1 },
    },
    extraReducers: (builder) => {
        builder
            .addCase(refillStock, (state) => {
                state.fishAndChips += initialState.fishAndChips - state.fishAndChips;
                state.beer += initialState.beer - state.beer;
            })
            .addCase(refillStockZomato, (state) => {
                state.fishAndChips += initialState.fishAndChips - state.fishAndChips;
                state.beer += initialState.beer - state.beer;
            })            
    }
})

export const { orderFishAndChips, orderBeer, updateNumOfOrders } = zomatoSlice.actions
export default zomatoSlice.reducer;