import  { configureStore } from '@reduxjs/toolkit'
import swiggyReducer from './slice/swiggySlice'
import zomatoReducer from './slice/zomatoSlice'
import restaurantReducer from './slice/restaurantSlice'
import { strangeOrdersDetected } from './slice/restaurantSlice'

const beerRiskTracker = store => next => action => {
    if(action.type === "zomatoOrder/orderBeer" || action.type === "swiggyOrder/orderBeer") {
        if(action.payload > 10) {
            alert('Strangely large number of orders detected (for beer)')
            store.dispatch(strangeOrdersDetected())
        }
    }
    return next(action)
}

const store = configureStore({
    reducer: {
        swiggy: swiggyReducer,
        zomato: zomatoReducer,
        restaurant: restaurantReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerRiskTracker)
})

export default store