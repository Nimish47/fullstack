// rtk-thunk - a very basic createAsyncthunk

const { fetchPost } = require('./slices/commentSlice')
const store = require('./store')

store.dispatch(fetchPost(3))

