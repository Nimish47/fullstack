const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
const axios = require('axios')

const initialState = { content: '', pending: false, error: '', type: 'youtube' }

// self cretated action handlers (3)
    // pending-fullfilled-rejected
const fetchPost = createAsyncThunk('comment/fetchPost', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    return response.data.body;
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
                state.error = action.error.message;
            })
    }
})

const { updateCommentType } = commentSlice.actions

module.exports = {
    updateCommentType,
    fetchPost,
    commentReducer: commentSlice.reducer
}