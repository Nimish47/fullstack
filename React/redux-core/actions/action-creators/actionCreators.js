const axios = require('axios')
const {
    BUY_CAKE,
    REFILL_CAKE_STOCK,
    BUY_ICE_CREAM,
    REFILL_ICE_CREAM_STOCK,
    FETCH_POST_WITH_ID
} = require('../action-types/actionTypes')

const buyCake = () => ({ type: BUY_CAKE })
const refillCakeStock = (count) => ({ type: REFILL_CAKE_STOCK, payload: count })
const buyIceCream = () => ({ type: BUY_ICE_CREAM })
const refillIceCreamStock = (count) => ({ type: REFILL_ICE_CREAM_STOCK, payload: count })
const fetchPostWithId = (post) => ({ type: FETCH_POST_WITH_ID, payload: post })

// returns a function, not a plain object, hence thunk handles it
// function can perform some task, after that dispatch action to reducer
const fetchPostAsync = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(fetchPostWithId(response.data.body))
            console.log('After axios call', getState())
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    }
}

//fetchAsyncBlocking

//doSomethingSync




module.exports = { buyCake, refillCakeStock, buyIceCream, refillIceCreamStock, fetchPostAsync }