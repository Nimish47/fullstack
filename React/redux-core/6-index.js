// our first custom middleware

const redux = require('redux')
const { buyCake, buyIceCream } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')

// pull applyMiddleware fn from redux
const { createStore, combineReducers, applyMiddleware } = redux


const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer
})

// first middleware fn
// the signature is needed for a redux middleware - 
// const customMiddleware = (store, action, next) => { ... }
// a middleware fn can have only one return statement and that is return next(action)
// return next(action)
    // is mandatory to be present (no other "returns" before it)
    // if next omitted flow won't move to next middleware/reducer
    // if action omitted, reducer's, dispatch won't have access to action object
    // even if next is a middleware, action cannot be omiited, since then next middleware will lose access to action and can't pass to reducer
    // library middlewares have next(action) pre-written in thier code
// explain when does a middleware runs
    // action is dispatched but hasn't reached reducer fn yet
    // hence middleware gets access to store data before it gets updated!   
const customMiddleware = store => next => action => {
    console.log(store.getState())
    return next(action)
}

// pass middleware as second parameter to createStore via applyMiddleware fn
const store = createStore(rootReducer, applyMiddleware(customMiddleware))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


console.log('Final state:', store.getState())