// library middleware
// redux-thunk
// action creater returns sync fn

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { buyCake, doSomethingSync } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')
const syncReducer = require('./reducers/syncReducer')

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer,
    randomNum: syncReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


console.log('Initial state:', store.getState())
// fire dispatches
store.dispatch(buyCake())
store.dispatch(doSomethingSync())

console.log('Final state:', store.getState())