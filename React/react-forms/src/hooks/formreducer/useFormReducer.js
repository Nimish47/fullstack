
import { useReducer } from "react"
import { INITIAL_STATE, reducer } from "./reducer"
import { errorReducer } from "./errorReducer"


export function useFormReducer(options = {}) {
    const [formData, dispatch] = useReducer(reducer, INITIAL_STATE)
    const [error, dispatchError] = useReducer(errorReducer, {})

    const validatorDefault = (name, value) => {
        // run the validator function
        if (name === 'password') {
            if (value.length < 6) dispatchError({ type: 'SET_ERROR', payload: { name } })
            else dispatchError({ type: 'NO_ERROR', payload: { name } })
        }
        if (name === 'email') {
            if (value.length < 6) dispatchError({ type: 'SET_ERROR', payload: { name } })
            else dispatchError({ type: 'NO_ERROR', payload: { name } })
        }
        if (name === 'age') {
            if (value < 18) dispatchError({ type: 'SET_ERROR', payload: { name } })
            else dispatchError({ type: 'NO_ERROR', payload: { name } })
        }
    }

    const changeHandlerDefault = (event, allCheckValues = []) => {
        const { name, value, checked, type } = event.target;

        // run the validator function for specific fields
        if (name === 'password' || name === 'email' || name === 'age') {
            if (value) validatorDefault(name, value);
            else dispatchError({ type: 'NO_ERROR', payload: { name } })
        }

        // except for checkbox, set the form data for all other kind of feilds
        if (type !== 'checkbox') dispatch({ type: "HANDLE_CHANGE_ALL", payload: { name, value } })

        // handle exclusively for checkbox    
        if (type === 'checkbox') {
            if (value === 'select_all') {
                dispatch({ type: "HANDLE_CHANGE_CHECKBOX_SELECT_ALL", payload: { name, value, checked, allCheckValues } })
                return;
            }

            dispatch({ type: "HANDLE_CHANGE_CHECKBOX", payload: { name, value, checked } })

        }
    }

    const submitHandlerDefault = (event) => {
        event.preventDefault();
        alert('Submitted successfully (default)')
        dispatch({ type: "SUBMIT_FORM" })
        dispatchError({ type: "CLEAR_ERROR" })
    }

    const clearHandlerDefault = (event) => {
        dispatch({ type: "CLEAR_FORM" })
        dispatchError({ type: "CLEAR_ERROR" })
    }

    return {
        formData,
        error,
        submitHandler: options.submitHandlerCustom ? options.submitHandlerCustom : submitHandlerDefault,
        changeHandler: options.changeHandlerCustom ? options.changeHandlerCustom : changeHandlerDefault,
        clearHandler: options.clearHandlerCustom ? options.clearHandlerCustom : clearHandlerDefault
    }
}

