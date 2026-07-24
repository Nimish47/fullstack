// lets omit return next(action) from first middleware
// notice how first middlewware blocks flow
// flow doesnot react second midddleware and hence reducer not hit
// store state remains unchanged!

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

// bad middleware
const middlewareOne = store => next => action => {
    console.log('first middleware')
    //return next(action)
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