import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

type PostState = {
    status: 'idle' | 'pending' | 'success' | 'failure',
    data: Post[],
    errorMessage: string
}

const initialState: PostState = { status: 'idle', data: [], errorMessage: '' };

export const fetchPosts = createAsyncThunk<Post[], string>('Posts/getPosts', async (URL: string, _) => {
    const resp = await axios.get(URL)
    // sanitize and verify properly that it is Post[] - add runtime validations
    return resp.data;
})

const PostSlice = createSlice({
    name: 'Posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => { state.status = "idle", state.data.push(action.payload) },
        deletePost: (state, action: PayloadAction<string>) => { state.data = state.data.filter(item => Number(item.id) !== Number(action.payload)) }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "pending"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "success"
                state.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = "failure"
                state.errorMessage = 'Some error occured';
            })
    }
})

export const { addPost, deletePost } = PostSlice.actions
export default PostSlice.reducer;