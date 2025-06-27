import { useState } from "react"


export function useForm(checkCompArrayData = []) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        age: '',
        dob: '',
        gender: '',
        food: [],
        city: ''
    })
    const [selectAll, setSelectAll] = useState(false)
    const [error, setError] = useState({
        password: false,
        email: false,
        age: false
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        setFormData({
            username: '',
            password: '',
            email: '',
            age: '',
            dob: '',
            gender: '',
            food: [],
            city: ''
        })
        setSelectAll(false)
        alert(`Username: ${formData.username} Password: ${formData.password} Email: ${formData.email} Age: ${formData.age} DOB: ${formData.dob} City: ${formData.city}`)
    }

    const changeHandler = (event) => {
        const { name, value, checked } = event.target;

        // run the validator function for specific fields
        if (name === 'password' || name === 'email' || name === 'age') {
            if (value) validator(name, value);
            else setError(prevError => ({ ...prevError, [name]: false }));
        }

        if (name !== 'food' && name !== 'foodSelectAll') {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }))
        }

        if (name === 'food') {
            setFormData(prevData => ({
                ...prevData,
                [name]: checked
                    ? [...prevData.food, value]
                    : prevData.food.filter(item => item !== value)
            }))

            setSelectAll(false)
        }

        if (name === 'foodSelectAll' && checkCompArrayData.length > 0) {
            let arr = [];
            if (checked) {
                setSelectAll(true);
                arr = checkCompArrayData; // add all options
            }
            else {
                setSelectAll(false);
                arr = []; // remove all options
            }
            setFormData(prevData => ({
                ...prevData,
                food: arr
            }))
        }
    }

    const validator = (name, value) => {
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

    return {
        formData,
        selectAll,
        error,
        handleSubmit,
        changeHandler
    }
}

