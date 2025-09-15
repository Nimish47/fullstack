// first slice
// multiple slices
// middlewares
    // multiple
    // 3 ways
        // default provided by rtk *3
        // custom only
        // default + custom

const store = require('./store')
const { buyCake } = require('./slices/CakeSlice')

console.log('initial store data', store.getState())

store.dispatch(buyCake(10))

console.log('final store data', store.getState())