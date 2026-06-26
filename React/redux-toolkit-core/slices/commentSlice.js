const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const initialState = { content: '', loading: false, error: '', type: 'youtube' }

// self created action handlers (3)
// pending-fullfilled-rejected
const fetchPost = createAsyncThunk('pops/fetchPost', async (id, thunkAPI) => {
    const response1 = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    const response2 = await axios.get(`https://jsonplaceholder.typicode.com/commentxs/${id}`)
    return response2.data.body + response1.data.body;
})

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        updateCommentType: (state, action) => { state.type = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.pending, (state) => { state.loading = true })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.loading = false;
                state.content = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // that's how error comes back // see logger
            })
    }
})

const { updateCommentType } = commentSlice.actions

module.exports = {
    updateCommentType,
    fetchPost,
    commentReducer: commentSlice.reducer
}