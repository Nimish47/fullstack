// this store is created just to imitate and explain the need for slices
// actual slice in different repo

const redux = require('redux')
const { swiggyReducer } = require('./reducers/swiggyReducer')
const { zomatoReducer } = require('./reducers/zomatoReducer')

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    zomato: zomatoReducer,
    swiggy: swiggyReducer
})

const pokeyMiddleware = store => next => action => {
    console.log('Pokey Middleware')
    return next(action)
}

const store = createStore(rootReducer, applyMiddleware(pokeyMiddleware))

module.exports = store