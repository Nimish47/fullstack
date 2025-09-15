// rtk-thunk - a very basic createAsyncthunk

const { fetchPost } = require('./slices/commentSlice')
const store = require('./store')

const dispatchFn = async () => {
    console.log('initial store data', store.getState())
    await store.dispatch(fetchPost(3))
    console.log('final store data', store.getState())
}

dispatchFn()

