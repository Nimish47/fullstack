
import { useReducer, useState } from "react"
import { INITIAL_STATE } from "./reducer"
import { reducer } from "./reducer"


export function useFormReducer(options = {}) {
    const [error, setError] = useState({})
    const [formData, dispatch] = useReducer(reducer, INITIAL_STATE)

    const validatorDefault = (name, value) => {
        // run the validator function
        if (name === 'password') {
            if (value.length < 6) setError(prevError => ({ ...prevError, password: true }))
            else setError(prevError => ({ ...prevError, password: false }))
        }
        if (name === 'email') {
            if (value.length < 6) setError(prevError => ({ ...prevError, email: true }))
            else setError(prevError => ({ ...prevError, email: false }))
        }

        if (name === 'age') {
            if (value < 18) setError(prevError => ({ ...prevError, age: true }))
            else setError(prevError => ({ ...prevError, age: false }))
        }
    }

    const changeHandlerDefault = (event, allCheckValues = []) => {
        const { name, value, checked, type } = event.target;

        // run the validator function for specific fields
        if (name === 'password' || name === 'email' || name === 'age') {
            if (value) validatorDefault(name, value);
            else setError(prevError => ({ ...prevError, [name]: false }));
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
        setError({})
    }

    const clearHandlerDefault = (event) => {
        dispatch({ type: "CLEAR_FORM" })
        setError({})
    }

    return {
        formData,
        error,
        setError,
        submitHandler: options.submitHandlerCustom ? options.submitHandlerCustom : submitHandlerDefault,
        changeHandler: options.changeHandlerCustom ? options.changeHandlerCustom : changeHandlerDefault,
        clearHandler: options.clearHandlerCustom ? options.clearHandlerCustom : clearHandlerDefault
    }
}

