const { createSlice } = require('@reduxjs/toolkit')
const { updateUserState, clearAllInventory } = require('./appSlice')

const initialState = { count: 100, category: 'sweet' }

const cakeSlice = createSlice({
    name: 'cakeSlice',
    initialState,
    reducers: {
        buyCake: (state, action) => { state.count = state.count - action.payload },
        refillCakeStock: (state, action) => { state.count = state.count + action.payload },
        modifyCakeCategory: (state, action) => { state.category = action.payload }
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

// console.log('View the slice object', cakeSlice)

const { buyCake, refillCakeStock, modifyCakeCategory } = cakeSlice.actions

module.exports = {
    buyCake,
    refillCakeStock,
    modifyCakeCategory,
    cakeReducer: cakeSlice.reducer
}

// slice object printed
// View the slice object {
//   name: 'cakeSlice',
//   reducer: [Function: reducer],
//   actions: {
//     buyCake: [Function: actionCreator] {
//       toString: [Function (anonymous)],
//       type: 'cakeSlice/buyCake',
//       match: [Function (anonymous)]
//     },
//     refillCakeStock: [Function: actionCreator] {
//       toString: [Function (anonymous)],
//       type: 'cakeSlice/refillCakeStock',
//       match: [Function (anonymous)]
//     },
//     modifyCategory: [Function: actionCreator] {
//       toString: [Function (anonymous)],
//       type: 'cakeSlice/modifyCategory',
//       match: [Function (anonymous)]
//     }
//   },
//   caseReducers: {
//     buyCake: [Function: buyCake],
//     refillCakeStock: [Function: refillCakeStock],
//     modifyCategory: [Function: modifyCategory]
//   },
//   getInitialState: [Function: getInitialState],
//   reducerPath: 'cakeSlice',
//   getSelectors: [Function: getSelectors],
//   selectors: {},
//   selectSlice: [Function: selectSlice],
//   injectInto: [Function: injectInto]
//}