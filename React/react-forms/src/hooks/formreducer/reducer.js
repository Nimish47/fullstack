export const INITIAL_STATE = {}


export function reducer(state,action) {
    switch(action.type) {
        case "HANDLE_CHANGE_ALL": 
            return {
                ...state,[action.payload.name]: action.payload.value
            }
        case "HANDLE_CHANGE_CHECKBOX": 
            return {
                ...state,
                [action.payload.name]: action.payload.checked
                    ? (
                        state[action.payload.name] && state[action.payload.name].length > 0
                            ? [...state[action.payload.name], action.payload.value]
                            : [action.payload.value]
                    )
                    : state[action.payload.name].filter(item => item !== action.payload.value)
            }        
        case "HANDLE_CHANGE_CHECKBOX_SELECT_ALL":
            return {
                    ...state,
                    [action.payload.name]: action.payload.checked ? action.payload.allCheckValues : []
                }
        case "CLEAR_FORM": 
            return {}
        case "SUBMIT_FORM":
            return {}   
        default:
            return state;          
    }
}