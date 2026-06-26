// extra reducers 

const store = require('./store')
const { buyCake } = require('./slices/CakeSlice')
const { buyIceCream } = require('./slices/IceCreamSlice')
const { updateUserState, clearAllInventory } = require('./slices/appSlice')

console.log('initial store data', store.getState())

store.dispatch(buyCake(10))
store.dispatch(buyIceCream(20))
store.dispatch(updateUserState('logout'))

console.log('user logged out', store.getState())
store.dispatch(updateUserState('login'))
console.log('new user logged in', store.getState())

store.dispatch(buyCake(20))
store.dispatch(buyIceCream(10))
store.dispatch(clearAllInventory())

console.log('inventory cleared', store.getState())
