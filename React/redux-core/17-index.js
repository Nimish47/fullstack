// library middleware
// multiple middlewares including thunk

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { buyCake, fetchBadPostAsync } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const postReducer = require('./reducers/postReducer')

const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    post: postReducer
})

const customMiddlewareOne = store => next => action => {
    console.log('m one')
    return next(action)
}

const customMiddlewareTwo = store => next => action => {
    console.log('m two')
    return next(action)
}

const store = createStore(rootReducer, applyMiddleware(customMiddlewareOne, thunk, customMiddlewareTwo))

const fireAllDispatch = async () => {
    console.log('Initial state:', store.getState())

    console.log('Waiting...')
    await store.dispatch(fetchBadPostAsync(10))

    console.log('Final state:', store.getState())
}

fireAllDispatch()


// loggers
// Initial state: { cake: { cakeCount: 100 }, post: {} }
// Waiting...
// m one
// m thunk
// (no dispatch so post not updated)
// Final state: { cake: { cakeCount: 99 }, post: {} }