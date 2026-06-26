const { configureStore } = require('@reduxjs/toolkit')
const { createLogger } = require('redux-logger') 
const { cakeReducer } = require('./slices/CakeSlice')
const { iceCreamReducer } = require('./slices/IceCreamSlice')
const { appReducer } = require('./slices/appSlice')
const { commentReducer } = require('./slices/commentSlice')
const { userReducer } = require('./slices/userSlice')

const customLoggerOne = store => next => action => {
    console.log('Middleware #1')
    return next(action)
}

const customLoggerTwo = store => next => action => {
    console.log('Middleware #2 (action type print), Type: ', action.type)
    return next(action)
}

const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        appState: appReducer,
        comment: commentReducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware() // only use default ones
    // middleware: () => [customLoggerOne, customLoggerTwo] // in this way we have full control over middlewares like earlier
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customLoggerOne, customLoggerTwo)
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store


// discuss 3 ways to define middlewares