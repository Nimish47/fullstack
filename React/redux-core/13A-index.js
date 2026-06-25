// library middleware
// redux-thunk

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { createLogger } = require('redux-logger')
const { fetchComment,commentReducer } = require('./reducers/commentReducer')

const { createStore, combineReducers, applyMiddleware } = redux
const logger = createLogger()

const rootReducer = combineReducers({
    comment: commentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

store.dispatch(fetchComment(10))