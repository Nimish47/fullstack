// implementing Immer

const redux = require('redux')
const { buyCake, refillCakeStock } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')

const { createStore } = redux

const store = createStore(cakeReducerWithImmer)

const customLogger = () => console.log('Logging via listener, state updated:', store.getState())

const unsubscribe = store.subscribe(customLogger)

console.log('Initial state:', store.getState())

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(refillCakeStock(6))

unsubscribe()