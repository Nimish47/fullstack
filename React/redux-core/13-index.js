// library middleware
// redux-thunk
// action creater returns async fn

const redux = require('redux')
const { createLogger } = require('redux-logger') 
const { thunk } = require('redux-thunk')
const { fetchPostAsync } = require('./actions/action-creators/actionCreators')
const postReducer = require('./reducers/postReducer')

const logger = createLogger()

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk,logger))

// dispatch a thunk related action
store.dispatch(fetchPostAsync(10))