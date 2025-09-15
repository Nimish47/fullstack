// rtk-thunk - advanced createAsyncthunk
const { fetchUser } = require('./slices/userSlice')
const store = require('./store')

const dispatchFn = async () => {
    console.log('initial store data', store.getState())
    await store.dispatch(fetchUser(7))
    console.log('final store data', store.getState())
}

dispatchFn()

