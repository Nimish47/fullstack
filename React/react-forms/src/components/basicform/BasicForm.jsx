import React, { useState } from 'react'
import styles from './BasicForm.module.css'

function BasicForm() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [food, setFood] = useState([])
    const [selectAll, setSelectAll] = useState(false)
    const [city, setCity] = useState('')

    const radioOptions = ['male', 'female', 'lgbtq+']
    const checkOptions = ['pizza', 'cake', 'cola']
    const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Username: ${username} Password: ${password} Email: ${email} Age: ${age} DOB: ${dob} City: ${city}`)

        setUserName('')
        setPassword('')
        setEmail('')
        setAge('')
        setDob('')
        setCity('')
        setFood([])
        setSelectAll(false)
        setGender('')
    }

    const changeHandler = (event) => {
        const { name, value, checked } = event.target;
        if (name === 'username') setUserName(value);
        if (name === 'password') setPassword(value);
        if (name === 'email') setEmail(value);
        if (name === 'age') setAge(value);
        if (name === 'dob') setDob(value);
        if (name === 'gender') setGender(value);
        if (name === 'city') setCity(value);

        if (name === 'food') {
            if (checked) setFood([...food, value]); // add if not exists
            else setFood(food.filter(item => item !== value)); // remove if already exists
            
            setSelectAll(false)
        }

        if (name === 'foodSelectAll') {
            if (checked) {
                setSelectAll(true);
                setFood(checkOptions); // add all options
            }
            else {
                setSelectAll(false);
                setFood([]); // remove all options
            }
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
                    value={username}
                    onChange={changeHandler}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter your password, Type = "password"'
                    name='password'
                    className={styles.input}
                    value={password}
                    onChange={changeHandler}
                    required
                />
                <input
                    type='email'
                    placeholder='Enter your email, Type = "email"'
                    name='email'
                    className={styles.input}
                    value={email}
                    onChange={changeHandler}
                />
                <input
                    type='number'
                    placeholder='Enter your age, Type = "number"'
                    name='age'
                    className={styles.input}
                    value={age}
                    onChange={changeHandler}
                />
                <input
                    type='date'
                    // placeholder='Enter your DOB, Type = "date"' // won't work
                    name='dob'
                    className={styles.input}
                    value={dob}
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
                                checked={gender === option} // important, try resetting you'll know why 
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
                                checked={food.includes(option)} // important, try resetting you'll know why 
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
                        value={city}
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

export default BasicForm