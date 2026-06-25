// this is my first redux setup
// very basic + unorganized
// no subscription, nothing
// just plain action creators + reducer + dispatch

// all commonjs imports
const redux = require('redux')

//pull out the createStore method
const { createStore } = redux

// action type
const BUY_CAKE = 'BUY_CAKE'

// action creator fns
// an action creator fn returns:
    // a plain object or
    // a function (only thunk can interrup such an action creator)
// "type" should match the one in reducer (convention)
const buyCake = () => ({ type: BUY_CAKE })

// create initial state of reducer
// can be of any data type
// but if mutiple keys, object is more preferred
const initialState = { cakeCount: 100 }

// create reducer
// pure fn - predictable
// takes a state and action and parameter
// should not mutate state - with Immute it can!
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return { ...state, cakeCount: state.cakeCount - 1 }
        default: return state
    }
}

// creating a store - via createStore()
// for more than one reducer - use combineReducer
const store = createStore(reducer)

// print initial state
// store provides getState method to access current "full" state of store
// Initial state: { cakeCount: 100 }
console.log('Initial state:', store.getState())


// store provides a dispatch fn to fire actions to reducer
// for every dispatch the listener fn will get triggered
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


// print updated state
console.log('Updated state:', store.getState())