const axios = require('axios')
const {
    BUY_CAKE,
    REFILL_CAKE_STOCK,
    BUY_ICE_CREAM,
    REFILL_ICE_CREAM_STOCK,
    FETCH_POST_WITH_ID,
    DO_SOMETHING_SYNC,
    LOGIN,
    ORDER_FOOD_ANY_PLATFORM
} = require('../action-types/actionTypes')

const buyCake = () => ({ type: BUY_CAKE })
const refillCakeStock = (count) => ({ type: REFILL_CAKE_STOCK, payload: count })
const buyIceCream = () => ({ type: BUY_ICE_CREAM })
const refillIceCreamStock = (count) => ({ type: REFILL_ICE_CREAM_STOCK, payload: count })
const fetchPostWithId = (post) => ({ type: FETCH_POST_WITH_ID, payload: post })
const syncFn = (num) => ({ type: DO_SOMETHING_SYNC, payload: num })
const loginUser = (userData) => ({ type: LOGIN, payload: userData })
const orderFoodAnyPlatform = (orderDetails) => ({ type: ORDER_FOOD_ANY_PLATFORM, payload: orderDetails })

// returns a function, not a plain object, hence thunk handles it
// need to await store.dispatch in index.js
// if not, won't wait for dispatch , would move to next line
// action-creators that thunk intercepts return a "function"
// function can be
// sync
// async
// if fn returns a plain object, won't be intercepted by a thunk   
// return fn is automatically provided 
// a dispatch method - for dispatching action
// a getState method - for fetching store state
const fetchPostAsync = (id) => {
    return async (dispatch, getState) => {
        console.log('m thunk')
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(fetchPostWithId(response.data.body))
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    }
}

// doSomethingSync
// this will be intercepted by thunk
// sync fn
const doSomethingSync = () => {
    return (dispatch, getState) => {
        const randomNumber = Math.floor(Math.random() * 10)
        dispatch(syncFn(randomNumber))
    }
}

// a bad scenario
// no dispatch
const fetchBadPostAsync = (id) => {
    return async (dispatch, getState) => {
        console.log('m thunk')
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            // dispatch(fetchPostWithId(response.data.body))
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    }
}

module.exports = {
    buyCake,
    refillCakeStock,
    buyIceCream,
    refillIceCreamStock,
    fetchPostAsync,
    doSomethingSync,
    fetchBadPostAsync,
    loginUser,
    orderFoodAnyPlatform
}