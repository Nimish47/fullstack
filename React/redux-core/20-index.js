// extra reducers alike concept
// what if two reducer have exactly same action type
// with one action we hit 2 reducers - so powerful!!
// jsut like extra reducers in rtk

const { orderFoodAnyPlatform } = require('./actions/action-creators/actionCreators')
const store = require('./store')


store.dispatch(orderFoodAnyPlatform({ item: 'biryani', quantity: 100 }))