const { BUY_CAKE, REFILL_CAKE_STOCK } = require('../actions/action-types/actionTypes')


const initialState = { cakeCount: 100 }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, cakeCount: state.cakeCount - 1 }
        case REFILL_CAKE_STOCK:
            return { ...state, cakeCount: state.cakeCount + action.payload }
        default:
            return state
    }
}

module.exports = reducer;