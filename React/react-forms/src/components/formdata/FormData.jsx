import React, { useState } from 'react'
import styles from './FormData.module.css'

function FormData() {

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

    const radioOptions = ['male', 'female', 'lgbtq+']
    const checkOptions = ['pizza', 'cake', 'cola']
    const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

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

        if (name === 'foodSelectAll') {
            let arr = [];
            if (checked) {
                setSelectAll(true);
                arr = checkOptions; // add all options
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



    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type='text'
                    placeholder='Enter your username, Type = "text"'
                    name='username'
                    className={styles.input}
                    value={formData.username}
                    onChange={changeHandler}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter your password, Type = "password"'
                    name='password'
                    className={styles.input}
                    value={formData.password}
                    onChange={changeHandler}
                    required
                />
                <input
                    type='email'
                    placeholder='Enter your email, Type = "email"'
                    name='email'
                    className={styles.input}
                    value={formData.email}
                    onChange={changeHandler}
                />
                <input
                    type='number'
                    placeholder='Enter your age, Type = "number"'
                    name='age'
                    className={styles.input}
                    value={formData.age}
                    onChange={changeHandler}
                />
                <input
                    type='date'
                    // placeholder='Enter your DOB, Type = "date"' // won't work
                    name='dob'
                    className={styles.input}
                    value={formData.dob}
                    onChange={changeHandler}
                />
                <div className={styles.radioButtons}>
                    {radioOptions.map((option) => (
                        <label className={styles.inputRadioLabel}>
                            <input
                                type='radio'
                                name='gender'              // name groups a set of radio buttons together
                                className={styles.inputRadio}
                                value={option}
                                checked={formData.gender === option} // important, try resetting you'll know why 
                                onChange={changeHandler}
                            />
                            {option.toLocaleUpperCase()}
                        </label>
                    ))}
                </div>

                <div className={styles.checkButtons}>
                    <label className={styles.inputCheckLabel}>
                        <input
                            type='checkbox'
                            name='foodSelectAll'
                            className={styles.inputCheck}
                            // value={selectAll} // not important here, since only true or false is expected
                            checked={selectAll}
                            onChange={changeHandler}
                        />
                        Select All
                    </label>
                    {checkOptions.map((option) => (
                        <label className={styles.inputCheckLabel}>
                            <input
                                type='checkbox'
                                name='food'                     // name doesn't groups a set of checkboxes together     
                                className={styles.inputCheck}
                                value={option}
                                checked={formData.food.includes(option)} // important, try resetting you'll know why 
                                onChange={changeHandler}
                            />
                            {option.toLocaleUpperCase()}
                        </label>
                    ))}
                </div>
                <div className={styles.dropdownButtons}>
                    <select
                        name='city'
                        className={styles.inputDropdown}
                        onChange={changeHandler}
                        value={formData.city}
                    >
                        <option value=''>Choose city</option>
                        {
                            dropdownOptions.map((option) => (
                                <option
                                    key={option}
                                    value={option}
                                >
                                    {option.toLocaleUpperCase()}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <button
                    type="submit"
                    className={styles.submit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormData;