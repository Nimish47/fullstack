import { createSlice } from '@reduxjs/toolkit';
import { refillStock, refillStockSwiggy } from './restaurantSlice';

const initialState = { fishAndChips: 50, beer: 200, orders: 0 }

const swiggySlice = createSlice({
    name: 'swiggyOrder',
    initialState,
    reducers: {
        orderFishAndChips: (state, action) => { state.fishAndChips = state.fishAndChips - action.payload },
        orderBeer: (state, action) => { state.beer = state.beer - action.payload },
        updateNumOfOrders: (state) => { state.orders = state.orders + 1 }
    },
    extraReducers: (builder) => {
        builder
            .addCase(refillStock, (state) => { 
                state.fishAndChips += initialState.fishAndChips - state.fishAndChips;
                state.beer += initialState.beer - state.beer;
            })
            .addCase(refillStockSwiggy, (state) => { 
                state.fishAndChips += initialState.fishAndChips - state.fishAndChips;
                state.beer += initialState.beer - state.beer;
            })            
    }
})

export const { orderFishAndChips, orderBeer, updateNumOfOrders } = swiggySlice.actions
export default swiggySlice.reducer;