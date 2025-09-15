// library middleware
// multiple middlewares including thunk

const redux = require('redux')
const { thunk } = require('redux-thunk')
const { buyCake, fetchPostAsync } = require('./actions/action-creators/actionCreators')
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

    store.dispatch(buyCake())
    console.log('Waiting...')
    await store.dispatch(fetchPostAsync(10))

    console.log('Final state:', store.getState())
}

fireAllDispatch()

// -> printed logs
// Initial state: { cake: { cakeCount: 100 }, post: {} }
// m one
// m two
// (above is for buyCake) - explanation (thunk gets hit but does not enter thunk return fn, see customthunkfn for details)
// Waiting...
// (below is for fetchPostAsync) - explanation
// m one
// m thunk
// m one
// m two
// Final state: {
//   cake: { cakeCount: 99 },
//   post: {
//     content: 'quo et expedita modi cum officia vel magni\n' +
//       'doloribus qui repudiandae\n' +
//       'vero nisi sit\n' +
//       'quos veniam quod sed accusamus veritatis error'
//   }

// notice how thunk is actually an interceptor and blocks further flow of action
    // so if no dispatch, data or any result won't get stored in store!
// notice even if action = fn, middleware 1 gets triggered, order is important!
