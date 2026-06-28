import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { refillStock, refillStockSwiggy } from './restaurantSlice';

const initialState = {
    fishAndChips: 50,
    beer: 200,
    orders: 0,
    posts: { loading: false, error: "", data: [], count: 0 },
    log: true
}

// export directly
export const fetchPosts = createAsyncThunk('swiggyOrder/posts', async (URL) => {
    const resp = await axios.get(URL)
    return resp.data;
})

const swiggySlice = createSlice({
    name: 'swiggyOrder',
    initialState,
    reducers: {
        orderFishAndChips: (state, action) => { state.fishAndChips = state.fishAndChips - action.payload },
        orderBeer: (state, action) => { state.beer = state.beer - action.payload },
        updateNumOfOrders: (state) => { state.orders = state.orders + 1 },
        logHandler: (state) => { state.log = !state.log }
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
            .addCase(fetchPosts.pending, (state) => {
                state.posts.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts.loading = false;
                state.posts.data = action.payload;
                state.posts.count = action.payload.length;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.posts.loading = false;
                state.posts.error = action.error.message;
            })
    }
})

export const { orderFishAndChips, orderBeer, updateNumOfOrders, logHandler } = swiggySlice.actions
export default swiggySlice.reducer;