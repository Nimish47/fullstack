// this is second first redux setup
// subscribe a listener fn to store updates
// unorganized


const redux = require('redux')

const { createStore } = redux

const BUY_CAKE = 'BUY_CAKE'
const buyCake = () => ({ type: BUY_CAKE })

const initialState = { cakeCount: 100 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return { ...state, cakeCount: state.cakeCount - 1 }
        default: return state
    }
}
const store = createStore(reducer)

// create a listener fn
// store provides a getState method to print state value of "whole" state
const customLogger = () => console.log('Logging via listener, state updated:', store.getState())

// subscribe to above store
// format: store.subscribe(listenerFunction)
// explanation below:
// When you call store.subscribe(listenerFunction),
// the listenerFunction will run every time an action is dispatched and the state updates.
// It returns an unsubscribe function, which you can call to stop listening for updates.
const unsubscribe = store.subscribe(customLogger)

console.log('Initial state:', store.getState())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

// unsubscribe from store
// now listener fn no longer fires 
unsubscribe()

// this works
// cake quantity got reduced
// but listener fn did not get fired, since we unsubscribed
store.dispatch(buyCake())
console.log('Manual logging, updated state:',store.getState())