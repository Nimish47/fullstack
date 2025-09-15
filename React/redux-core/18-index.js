// auth middleware: A Real time example

const redux = require('redux')
const { buyCake, buyIceCream, loginUser } = require('./actions/action-creators/actionCreators')
const cakeReducerWithImmer = require('./reducers/cakeReducerWithImmer')
const iceCreamReducer = require('./reducers/iceCreamReducer')
const loginReducer = require('./reducers/loginReducer')

// pull applyMiddleware fn from redux
const { createStore, combineReducers, applyMiddleware } = redux

const rootReducer = combineReducers({
    cake: cakeReducerWithImmer,
    iceCream: iceCreamReducer,
    user: loginReducer
})

const authMiddleware = store => next => action => {
    const id = store.getState().user.userDetails.id
    const userObj = store.getState().user.userDetails

    if (Number(id) === 47) {
        console.log('WRITE ACCESS GRANTED!', id)
        return next(action)
    }
    else if (!Object.keys(userObj).length) {
        console.log('New user login detected with id:', action.payload.id)
        return next(action)
    }
    console.log('WRITE ACCESS DENIED!', id)
}

const store = createStore(rootReducer, applyMiddleware(authMiddleware))

// dispatch one set of actions
// write access granted
store.dispatch(loginUser({ fName: 'Nishant', lName: 'Nimish', id: 47 }))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
console.log('Updated state:', store.getState())

// dispatch another set of actions
// write access denied
// store.dispatch(loginUser({ fName: 'Amit', lName: 'Behera', id: 233 }))
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// console.log('Updated state:', store.getState())