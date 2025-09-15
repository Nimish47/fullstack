const { createSlice } = require('@reduxjs/toolkit')

const initialState = { currentState: '', inventoryState: true }

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        updateUserState: (state, action) => { state.currentState = action.payload },
        clearAllInventory: (state) => { state.inventoryState = false }
    }
})

const { updateUserState, clearAllInventory } = appSlice.actions

module.exports = {
    updateUserState,
    clearAllInventory,
    appReducer: appSlice.reducer
}

// it auto creates action creators for us
// no need of action type directly, although created internally