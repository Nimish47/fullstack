import React from 'react'
import styles from './CustomFormTwo.module.css'
import Text from '../../components/formElements/textElement/Text'
import Password from '../../components/formElements/passwordElement/Password'
import Email from '../../components/formElements/emailElement/Email'
import Number from '../../components/formElements/numberElement/Number'
import Date from '../../components/formElements/dateElement/Date'
import Radio from '../../components/formElements/radioElement/Radio'
import Checkbox from '../../components/formElements/checkboxElement/Checkbox'
import Dropdown from '../../components/formElements/dropdownElement/Dropdown'
import { useForm } from '../../hooks/form/useForm'
import SubmitButton from '../../components/formElements/buttonElement/submitbutton/SubmitButton'


const radioOptions = ['male', 'female', 'lgbtq+']
const checkOptions = ['pizza', 'cake', 'cola']
const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

function CustomFormTwo() {

    const validatorCustom = (name, value) => {
        // run the validator function
        if (name === 'password') {
            if (value.length < 3) setError(prevError => ({ ...prevError, password: true }))
            else setError(prevError => ({ ...prevError, password: false }))
        }
        if (name === 'email') {
            if (value.length < 6) setError(prevError => ({ ...prevError, email: true }))
            else setError(prevError => ({ ...prevError, email: false }))
        }

        if (name === 'age') {
            if (value > 18) setError(prevError => ({ ...prevError, age: true }))
            else setError(prevError => ({ ...prevError, age: false }))
        }
    }

    const changeHandlerCustom = (event) => {
        const { name, value, checked, type } = event.target;

        // run the validator function for specific fields
        if (name === 'password' || name === 'email' || name === 'age') {
            if (value) validatorCustom(name, value);
            else setError(prevError => ({ ...prevError, [name]: false }));
        }

        // except for checkbox, set the form data for all other kind of feilds
        if (type !== 'checkbox') setFormData(prevData => ({ ...prevData, [name]: value }))

        if (type === 'checkbox') {
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

    const submitHandlerCustom = (event) => {
        event.preventDefault();
        alert('Submitted successfully (custom)')
        setFormData({})
        setError({})
    }

    const options = { submitHandlerCustom, changeHandlerCustom }

    const {
        formData,
        setFormData,
        error,
        setError,
        submitHandler,
        changeHandler
    } = useForm(options);

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.sideText}>New!</div>
                <Text
                    name='username'
                    value={formData.username || ''}
                    changeHandler={changeHandler}
                    placeholder={'Username'}
                    required={true}
                    error={error.username}
                />
                <Password
                    name='password'
                    value={formData.password || ''}
                    changeHandler={changeHandler}
                    placeholder={'Password'}
                    required={true}
                    error={error.password}
                />
                <Email
                    name='email'
                    value={formData.email || ''}
                    changeHandler={changeHandler}
                    placeholder={'Email'}
                    required={false}
                    error={error.email}
                />
                <Number
                    name='age'
                    value={formData.age || ''}
                    changeHandler={changeHandler}
                    placeholder={'Age'}
                    required={false}
                    error={error.age}
                />
                <Date
                    name='dob'
                    value={formData.dob || ''}
                    changeHandler={changeHandler}
                    required={false}
                    error={error.dob}
                />
                <Radio
                    name='gender'
                    value={formData.gender || ''}
                    radioOptions={radioOptions}
                    changeHandler={changeHandler}
                    error={error.gender}
                />
                <div className={styles.checkButtons}>
                    {checkOptions.map((option, index) => (
                        <Checkbox
                            key={index}
                            name='food'
                            value={formData.food || ''}
                            changeHandler={changeHandler}
                            option={option}
                        />
                    ))}
                </div>
                <Dropdown
                    name='city'
                    placeholder={'Select a city'}
                    value={formData.city || ''}
                    changeHandler={changeHandler}
                    dropdownOptions={dropdownOptions}
                    error={error.city}
                />
                <SubmitButton
                    placeholder={'Submit'}
                    error={error}
                />
            </form>
        </div>
    )
}

export default CustomFormTwo