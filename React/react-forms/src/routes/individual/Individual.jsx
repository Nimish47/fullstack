import React, { useState } from 'react'
import styles from './Individual.module.css'
import Text from '../../components/formElements/textElement/Text';
import Password from '../../components/formElements/passwordElement/Password';
import Email from '../../components/formElements/emailElement/Email';
import Number from '../../components/formElements/numberElement/Number';
import Date from '../../components/formElements/dateElement/Date';
import Button from '../../components/formElements/buttonElement/Button';
import Radio from '../../components/formElements/radioElement/Radio';
import Checkbox from '../../components/formElements/checkboxElement/Checkbox';
import Dropdown from '../../components/formElements/dropdownElement/Dropdown';

function Individual() {

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

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Text
          title='username'
          val={formData.username}
          changeHandler={changeHandler}
          placeHolderText={'Username'}
          requiredFlag={true}
        />
        <Password
          title='password'
          val={formData.password}
          changeHandler={changeHandler}
          placeHolderText={'Password'}
          requiredFlag={true}
          error={error.password}
        />
        <Email
          title='email'
          val={formData.email}
          changeHandler={changeHandler}
          placeHolderText={'Email'}
          requiredFlag={false}
          error={error.email}
        />
        <Number
          title='age'
          val={formData.age}
          changeHandler={changeHandler}
          placeHolderText={'Age'}
          requiredFlag={false}
          error={error.age}
        />
        <Date
          title='dob'
          val={formData.dob}
          changeHandler={changeHandler}
          requiredFlag={false}
        />
        <Radio
          radioOptions={radioOptions}
          title='gender'
          val={formData.gender}
          changeHandler={changeHandler}
        />
        <Checkbox
          title='food'
          titleAll='foodSelectAll'
          selectAll={selectAll}
          val={formData.food}
          changeHandler={changeHandler}
          checkOptions={checkOptions}
        />
        <Dropdown
          title='city'
          val={formData.city}
          changeHandler={changeHandler}
          dropdownOptions={dropdownOptions}
          placeHolderText={'Select a city'}
        />
        <Button
          placeholder={'Submit'}
          error={error}
        />
      </form>
    </div>
  )
}

export default Individual