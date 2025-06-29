import { useState } from "react"


export function useForm(options = {}) {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})


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
        if (type !== 'checkbox') setFormData(prevData => ({ ...prevData, [name]: value }))

        if (type === 'checkbox') {
            if (value === 'select_all') {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: checked ? allCheckValues : []
                }))
                return;
            }

            setFormData(prevData => ({
                ...prevData,
                [name]: checked
                    ? (
                        prevData[name] && prevData[name].length > 0
                            ? [...prevData[name], value]
                            : [value]
                    )
                    : prevData[name].filter(item => item !== value)
            }))
        }
    }

    const submitHandlerDefault = (event) => {
        event.preventDefault();
        alert('Submitted successfully (default)')
        setFormData({})
        setError({})
    }

    const clearHandlerDefault = (event) => {
        setFormData({})
        setError({})
    }

    return {
        formData,
        setFormData,
        error,
        setError,
        submitHandler: options.submitHandlerCustom ? options.submitHandlerCustom : submitHandlerDefault,
        changeHandler: options.changeHandlerCustom ? options.changeHandlerCustom : changeHandlerDefault,
        clearHandler: options.clearHandlerCustom ? options.clearHandlerCustom : clearHandlerDefault
    }
}

