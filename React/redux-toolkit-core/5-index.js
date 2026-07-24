// rtk-thunk - advanced createAsyncthunk
const { fetchUser } = require('./slices/userSlice')
const store = require('./store')

const dispatchFn = async () => {
    // console.log(store.getState())
    await store.dispatch(fetchUser(7))
    // console.log(store.getState())
}

dispatchFn()

