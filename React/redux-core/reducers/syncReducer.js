const { produce } = require('immer')
const { DO_SOMETHING_SYNC } = require('../actions/action-types/actionTypes')

const initialState = { value: 0 }

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case DO_SOMETHING_SYNC:
                draft.value = action.payload
                break;
        }
    })

}

module.exports = reducer;