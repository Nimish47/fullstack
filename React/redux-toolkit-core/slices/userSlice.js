const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const { buyCake } = require('./CakeSlice')

const initialState = { name: '', pending: false, error: '', admin: false }

// try to keep thunk fn and related slice in same file
// else need to fix a circular dependency issue!
// sync task can be done too
const fetchUser = createAsyncThunk('user/fetchUser', async (id, thunkAPI) => {

    // dispatch an action from current user slice
    if (Number(id) === 7) thunkAPI.dispatch(giveAdminAccess())

    // dispatch an action from cake slice    
    if (Number(id) === 3) thunkAPI.dispatch(buyCake(100))

    return 'pops';
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        giveAdminAccess: (state) => { state.admin = true }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => { state.loading = true })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.name = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

const { giveAdminAccess } = userSlice.actions

module.exports = {
    giveAdminAccess,
    fetchUser,
    userReducer: userSlice.reducer
}