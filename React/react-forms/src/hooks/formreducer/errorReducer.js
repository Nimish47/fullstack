export function errorReducer(state, action) {
    switch (action.type) {
        case "SET_ERROR":
            return { ...state, [action.payload.name]: true };
        case "NO_ERROR":
            return { ...state, [action.payload.name]: false };
        case "CLEAR_ERROR":
            return {};
        default:
            return state;
    }
};