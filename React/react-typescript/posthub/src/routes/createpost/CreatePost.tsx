import styles from './CreatePost.module.css'
import Dropdown from '../../components/form/formElements/dropdownElement/Dropdown'
import Text from '../../components/form/formElements/textElement/Text'
import Password from '../../components/form/formElements/passwordElement/Password'
import Email from '../../components/form/formElements/emailElement/Email'
import Date from '../../components/form/formElements/dateElement/Date'
import Number from '../../components/form/formElements/numberElement/Number'
import Radio from '../../components/form/formElements/radioElement/Radio'
import CheckboxAll from '../../components/form/formElements/checkboxAll/CheckBoxAll'
import Checkbox from '../../components/form/formElements/checkboxElement/Checkbox'
import SubmitButton from '../../components/form/formElements/buttonElement/submitbutton/SubmitButton'
import ResetButton from '../../components/form/formElements/buttonElement/clearbutton/ResetButton'
import { useForm } from '../../components/form/hook/useForm'

const radioOptions = ['male', 'female', 'lgbtq+']
const checkOptions = ['pizza', 'cake', 'cola']
const dropdownOptions = ['Mumbai', 'New Delhi', 'Kolkata', 'Bangalore', 'Chennai']

function CustomForm() {

    const {
        formData,
        submitHandler,
        clearHandler,
        changeHandler,
        error
    } = useForm();

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
                    value={formData.age}
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
                />
                <Radio
                    name='gender'
                    value={formData.gender || ''}
                    radioOptions={radioOptions}
                    changeHandler={changeHandler}
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
                            value={formData.food}
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

export default CustomForm