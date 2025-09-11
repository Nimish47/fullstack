// library middleware
// redux-thunk

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { buyCake, fetchPostAsync } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')
const postReducer = require('./reducers/postReducer')

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer,
    post: postReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

// dispatch a thunk related action
store.dispatch(buyCake())
store.dispatch(fetchPostAsync(2))

console.log('Final state:', store.getState())