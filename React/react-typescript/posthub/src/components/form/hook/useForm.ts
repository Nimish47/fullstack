import { useState } from "react"

type Options = {
    submitHandlerCustom?: () => void,
    changeHandlerCustom?: () => void,
    clearHandlerCustom?: () => void,
}

type FormInputs = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

type FormInfo = {
    username: string,
    password: string,
    email?: string,
    age?: number,
    dob?: string,
    gender?: string,
    food?: string[],
    city?: string
}

type ErrorInfo = {
    email: boolean,
    age: boolean,
    password: boolean
}

const INIT_STATE = {
        username: '',
        password: '',
        food: []
    }

export function useForm(options: Options = {}) {

    const [formData, setFormData] = useState<FormInfo>(INIT_STATE)
    const [error, setError] = useState<Partial<ErrorInfo>>({})


    const validatorDefault = (name: string, value: number | string) => {
        // run the validator function
        if (name === 'password') {
            if (typeof value === "string" && value.length < 6) setError(prevError => ({ ...prevError, password: true }))
            else setError(prevError => ({ ...prevError, password: false }))
        }
        if (name === 'email') {
            if (typeof value === "string" && value.length < 6) setError(prevError => ({ ...prevError, email: true }))
            else setError(prevError => ({ ...prevError, email: false }))
        }

        if (name === 'age') {
            if (Number(value) < 18) setError(prevError => ({ ...prevError, age: true }))
            else setError(prevError => ({ ...prevError, age: false }))
        }
    }

    const changeHandlerDefault = (
        event: FormInputs,allCheckValues: string[] = []
    ) => {
        const { name, value, type } = event.target;
        let checked: boolean;
        if (event.target instanceof HTMLInputElement) {
            checked = event.target.checked
        }

        // run the validator function for specific fields
        if (name === 'password' || name === 'email' || name === 'age') {
            if (value) validatorDefault(name, value);
            else setError(prevError => ({ ...prevError, [name]: false }));
        }

        // except for checkbox, set the form data for all other kind of feilds
        if (type !== 'checkbox') setFormData(prevData => ({ ...prevData, [name]: value }))
        
        const fieldName = name as "food";
        if (type === 'checkbox') {


            if (value === 'select_all') {
                setFormData(prevData => ({
                    ...prevData,
                    [fieldName]: checked ? allCheckValues : []
                }))
                return;
            }

            setFormData(prevData => ({
                ...prevData,
                [fieldName]: checked
                    ? (
                        prevData[fieldName] && prevData[fieldName].length > 0
                            ? [...prevData[fieldName], value]
                            : [value]
                    )
                    : prevData[fieldName]?.filter(item => item !== value)
            }))
        }
    }

    const submitHandlerDefault = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(JSON.stringify(formData))
        setFormData(INIT_STATE)
        setError({})
    }

    const clearHandlerDefault = () => {
        setFormData(INIT_STATE)
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

