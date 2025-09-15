// Do we really need a slice?
// Reducer fns imitating a slice
// slice is just a way to reduce old redux boilerplate
    // immer
    // action-types
    // action-creators
    // all above 3 auto-generated and applied

    
const { swiggyActions } = require('./reducers/swiggyReducer')
const { zomatoActions } = require('./reducers/zomatoReducer')

const store = require('./store')

const { orderFoodSwiggy, refillFoodSwiggy } = swiggyActions
const { orderFoodZomato, refillFoodZomato } = zomatoActions

console.log('Initial state', store.getState())

store.dispatch(orderFoodZomato({ item: 'biryani', quantity: 100 }))
store.dispatch(orderFoodSwiggy({ item: 'curry', quantity: 20 }))
store.dispatch(refillFoodZomato({ item: 'biryani', quantity: 10 }))
store.dispatch(refillFoodSwiggy({ item: 'curry', quantity: 2 }))

console.log('Final state', store.getState())