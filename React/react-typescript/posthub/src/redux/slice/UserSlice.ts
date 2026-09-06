import { createSlice } from '@reduxjs/toolkit';

type User = {
    username: string,
    password: string
}

const initialState: User = { username: '', password: '' }

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser: (_, action) => { return action.payload },
        updatePassword: (state, action) => { state.password = action.payload },
        resetUser: () => { return initialState }
    }
})

export const { addUser, updatePassword, resetUser } = userSlice.actions
export default userSlice.reducer;