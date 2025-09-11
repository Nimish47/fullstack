// library middleware
// redux-loggers

const redux = require('redux')
const { createLogger } = require('redux-logger') 
const { buyCake, refillCakeStock, buyIceCream, refillIceCreamStock } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')

// create Logger middleware
// by default has a "return next(action)" at the end
const logger = createLogger()
// prints something like this at every dispatch
//  action BUY_CAKE @ 18:16:14.637
//    prev state { cake: { cakeCount: 100 }, iceCream: { iceCreamCount: 100 } }
//    action     { type: 'BUY_CAKE' }
//    next state { cake: { cakeCount: 99 }, iceCream: { iceCreamCount: 100 } }

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


console.log('Final state:', store.getState())