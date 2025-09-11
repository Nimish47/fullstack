// implementing two custom middlewares

const redux = require('redux')
const { buyCake, refillCakeStock, buyIceCream, refillIceCreamStock } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')

// pull applyMiddleware fn from redux
const { createStore, combineReducers, applyMiddleware } = redux


const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer
})

// first middleware fn
const customLoggerCake = store => next => action => {
    console.log(store.getState().cake)
    return next(action)
}

// second middleware fn
const customLoggerIceCream = store => next => action => {
    console.log(store.getState().iceCream)
    return next(action)
}

// pass middleware as second parameter to createStore via applyMiddleware fn
// order of middlewares is important, thats how they get executed
const store = createStore(rootReducer, applyMiddleware(customLoggerCake,customLoggerIceCream))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


console.log('Final state:', store.getState())