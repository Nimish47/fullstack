const { produce } = require('immer')
const axios = require('axios')

//action types
const COMMENTS_PENDING = 'COMMENTS_PENDING';
const COMMENT_ADD = 'COMMENT_ADD';
const COMMENT_ERROR = 'COMMENT_ERROR';

// plain object action creator
const pendingComment = () => ({ type: COMMENTS_PENDING })
const successComment = (comment) => ({ type: COMMENT_ADD, payload: comment })
const failureComment = (err) => ({ type: COMMENT_ERROR, payload: err })

// thunk action creator
const fetchComment = (id) => {
    return async (dispatch, getState) => {
        dispatch(pendingComment())
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            dispatch(successComment(response.data.body))
        } catch (error) {
            dispatch(failureComment('Something whent wrong'))
        }
    }
}

// reducer fn below
const initialState = {
    content: '',
    error: '',
    pending: false
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case COMMENTS_PENDING:
                draft.pending = true;
                break;

            case COMMENT_ADD:
                draft.content = action.payload;
                draft.pending = false;
                break;

            case COMMENT_ERROR:
                draft.error = action.payload;
                draft.pending = false;
                break;
        }
    })
}

module.exports = {
    commentReducer: reducer,
    fetchComment,
    pendingComment,
    successComment,
    failureComment
};