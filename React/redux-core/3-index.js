// organized version of 2-index

const redux = require('redux')
const { buyCake, refillCakeStock } = require('./actions/action-creators/actionCreators')
const cakeReducer = require('./reducers/cakeReducer')

const { createStore } = redux

const store = createStore(cakeReducer)

const customLogger = () => console.log('Logging via listener, state updated:', store.getState())

const unsubscribe = store.subscribe(customLogger)

console.log('Initial state:', store.getState())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(refillCakeStock(4))

unsubscribe()