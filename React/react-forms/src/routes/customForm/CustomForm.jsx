import React from 'react'
import styles from './CustomForm.module.css'
import Text from '../../components/formElements/textElement/Text'
import Password from '../../components/formElements/passwordElement/Password'
import Email from '../../components/formElements/emailElement/Email'
import Number from '../../components/formElements/numberElement/Number'
import Date from '../../components/formElements/dateElement/Date'
import Radio from '../../components/formElements/radioElement/Radio'
import Checkbox from '../../components/formElements/checkboxElement/Checkbox'
import Dropdown from '../../components/formElements/dropdownElement/Dropdown'
import Button from '../../components/formElements/buttonElement/Button'
import { useForm } from '../../hooks/form/useForm'


const radioOptions = ['male', 'female', 'lgbtq+']
const checkOptions = ['pizza', 'cake', 'cola']
const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

function CustomForm() {
    const { formData, selectAll, error, handleSubmit, changeHandler } = useForm(checkOptions);

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

export default CustomForm