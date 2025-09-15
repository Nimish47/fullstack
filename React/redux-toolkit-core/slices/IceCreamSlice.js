const { createSlice } = require('@reduxjs/toolkit')
const { updateUserState, clearAllInventory } = require('./appSlice')

const initialState = { count: 50, category: 'desert' }

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        buyIceCream: (state, action) => { state.count = state.count - action.payload },
        refillIceCreamStock: (state, action) => { state.count = state.count + action.payload },
        modifyIceCreamCategory: (state, action) => { state.category = action.payload }
    },
    extraReducers: (builder) => {
        builder
        .addCase(clearAllInventory, (state,action) => { state.count = 0 })
        .addCase(updateUserState, (state, action) => {
            if (action.payload === "logout") return {}
            if (action.payload === "login") return initialState
        })
    }
})

const { buyIceCream, refillIceCreamStock, modifyIceCreamCategory } = iceCreamSlice.actions

module.exports = {
    buyIceCream,
    refillIceCreamStock,
    modifyIceCreamCategory,
    iceCreamReducer: iceCreamSlice.reducer
}

// it auto creates action creators for us
// no need of action type directly, although created internally