const { produce } = require('immer')
const { LOGIN } = require('../actions/action-types/actionTypes')

const initialState = { userDetails: {} }

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOGIN:
                draft.userDetails = action.payload
                break;
        }
    })

}

module.exports = reducer;