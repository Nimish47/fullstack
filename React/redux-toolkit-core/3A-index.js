// global actions
// actions need not be tied to a slice
// createActions()

const { updateTheme } = require('./globalActions')
const store = require('./store')



// console.log('initial store state', store.getState())

store.dispatch(updateTheme("blue"))

// console.log('final store state', store.getState())
