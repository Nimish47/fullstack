import React from 'react'
import styles from './CustomFormThree.module.css'
import Text from '../../components/formElements/textElement/Text'
import Password from '../../components/formElements/passwordElement/Password'
import Email from '../../components/formElements/emailElement/Email'
import Number from '../../components/formElements/numberElement/Number'
import Date from '../../components/formElements/dateElement/Date'
import Radio from '../../components/formElements/radioElement/Radio'
import Checkbox from '../../components/formElements/checkboxElement/Checkbox'
import Dropdown from '../../components/formElements/dropdownElement/Dropdown'
import CheckboxAll from '../../components/formElements/checkboxAll/CheckBoxAll'
import SubmitButton from '../../components/formElements/buttonElement/submitbutton/SubmitButton'
import ResetButton from '../../components/formElements/buttonElement/clearbutton/submitbutton/ResetButton'
import { useFormReducer } from '../../hooks/formreducer/useFormReducer'

const radioOptions = ['male', 'female', 'lgbtq+']
const checkOptions = ['pizza', 'cake', 'cola']
const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

function CustomFormThree() {

    const {
        formData,
        submitHandler,
        clearHandler,
        changeHandler,
        error
    } = useFormReducer();

    return (
        <div className={styles.container}>
            <form
                onSubmit={submitHandler}
                onReset={clearHandler}
                className={styles.form}
            >
                <div className={styles.sideText}>Old!</div>
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
                    <CheckboxAll
                        name='food'
                        value='select_all'
                        changeHandler={changeHandler}
                        formValue={formData.food || []}
                        allCheckValues={checkOptions}
                    />
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
                <div className={styles.submitButtonContainer}>
                    <SubmitButton
                        placeholder={'Submit'}
                        error={error}
                    />
                </div>
                <div className={styles.resetButtonContainer}>
                    <ResetButton
                        placeholder={'Reset'}
                        formData={formData}
                    />
                </div>
            </form>
        </div>
    )
}

export default CustomFormThree