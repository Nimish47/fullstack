const { produce } = require('immer')
const { BUY_CAKE, REFILL_CAKE_STOCK } = require('../actions/action-types/actionTypes')

const initialState = { cakeCount: 100 }

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case BUY_CAKE:
                draft.cakeCount = draft.cakeCount - 1;
                break;
            case REFILL_CAKE_STOCK:
                draft.cakeCount = draft.cakeCount + action.payload
                break;
        }
    })

}

module.exports = reducer;