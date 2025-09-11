const { produce } = require('immer')
const { BUY_ICE_CREAM, REFILL_ICE_CREAM_STOCK } = require('../actions/action-types/actionTypes')

const initialState = { iceCreamCount: 100 }

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case BUY_ICE_CREAM:
                draft.iceCreamCount = draft.iceCreamCount - 1;
                break;
            case REFILL_ICE_CREAM_STOCK:
                draft.iceCreamCount = draft.iceCreamCount + action.payload
                break;
        }
    })

}

module.exports = reducer;