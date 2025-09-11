// lets omit "action" from first middleware
// code crashed, unable to access "action" in second middleware


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

// bad middleware
const middlewareOne = store => next => action => {
    console.log('first middleware')
    return next()
}

const middlewareTwo = store => next => action => {
    console.log('second middleware')
    return next(action)
}

const store = createStore(rootReducer, applyMiddleware(middlewareOne,middlewareTwo))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


console.log('Final state:', store.getState())