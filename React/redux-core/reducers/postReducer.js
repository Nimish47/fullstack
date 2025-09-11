const { produce } = require('immer')
const { FETCH_POST_WITH_ID } = require('../actions/action-types/actionTypes')

const initialState = {}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case FETCH_POST_WITH_ID:
                draft.content =  action.payload
                break;
        }
    })

}

module.exports = reducer;