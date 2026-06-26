// rtk-thunk - advanced createAsyncthunk
const { fetchUser } = require('./slices/userSlice')
const store = require('./store')

const dispatchFn = async () => {
    await store.dispatch(fetchUser(7))
}

dispatchFn()

