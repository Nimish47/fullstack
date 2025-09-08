import { configureStore } from "@reduxjs/toolkit";
import counter_Reducer from './components/counter/counterSlice'
import user_Reducer from './components/object/UserSlice'

// this mainly creates a data store for us
// with different slices based on keys in reducer object
export const store = configureStore({
    reducer: {
        counter: counter_Reducer,
        userState: user_Reducer
    }
})

console.log('Store',store)