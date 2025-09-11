// implementing combine reducers

const redux = require('redux')
const { buyCake, refillCakeStock, buyIceCream, refillIceCreamStock } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')

// pull combineReducer fn from redux
const { createStore, combineReducers } = redux

// use combineReducer() to create a root reducer
// "key" represents the key of the data will get stored in redux state
// "value" represent the reducer itself
const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer
})

// create a redux store with root reducer
const store = createStore(rootReducer)

const customLogger = () => console.log('Logging via listener, state updated:', store.getState())

const unsubscribe = store.subscribe(customLogger)

// Initial state: { cake: { cakeCount: 100 }, iceCream: { iceCreamCount: 100 } }
console.log('Initial state:', store.getState())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(refillCakeStock(2))
store.dispatch(refillIceCreamStock(2))

unsubscribe()