// conditional middlewares
// not possible
// reason: gpt


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

// this is the best we can do
// filter logic by action
// both middlewares will still get hit irrespective!
const middlewareOne = store => next => action => {
    if(action.type === "BUY_CAKE") console.log(store.getState().cake)
    return next(action)
}

const middlewareTwo = store => next => action => {
    if(action.type === "BUY_ICE_CREAM") console.log(store.getState().iceCream)
    return next(action)
}

const store = createStore(rootReducer, applyMiddleware(middlewareOne,middlewareTwo))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


console.log('Final state:', store.getState())