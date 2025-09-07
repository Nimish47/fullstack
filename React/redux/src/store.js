import { configureStore } from "@reduxjs/toolkit";
import counter_Reducer from './components/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counter_Reducer
    }
})