// library middleware
// redux-thunk
// what if don't await store.dispatch

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { buyCake, fetchPostAsync } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')
const postReducer = require('./reducers/postReducer')

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer,
    post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log('Initial state:', store.getState())

//fire all dispatches
store.dispatch(buyCake())
console.log('Waiting...')
// without async-await her, it won't wait
store.dispatch(fetchPostAsync(10))

console.log('Final state:', store.getState())