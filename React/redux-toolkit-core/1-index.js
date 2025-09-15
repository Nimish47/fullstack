// first slice
// multiple slices
// middlewares
    // multiple
    // 3 ways
        // default provided by rtk *3
        // custom only
        // default + custom

const store = require('./store')
const { buyCake, refillCakeStock, modifyCakeCategory } = require('./slices/CakeSlice')
const { buyIceCream, refillIceCreamStock, modifyIceCreamCategory }= require('./slices/IceCreamSlice')

console.log('initial store data', store.getState())

store.dispatch(buyCake(10))
store.dispatch(refillCakeStock(20))
store.dispatch(modifyCakeCategory('desert'))

store.dispatch(buyIceCream(10))
store.dispatch(refillIceCreamStock(30))
store.dispatch(modifyIceCreamCategory('sweet'))

console.log('final store data', store.getState())