import React, { useState, type ChangeEvent } from "react"
import styles from './Login.module.css'
import { useDispatch } from "react-redux"
import { addUser } from "../../redux/slice/UserSlice"
import { useNavigate } from "react-router-dom"

function Login() {

    type User = {
        username: string,
        password: string
    }

    const initState: User = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState<User>(initState)
    const dispatch = useDispatch();
    const navigate = useNavigate()


    // add to redux
    // redirect to /
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addUser(formData))
        navigate('/', { replace: true })
        console.log('submitted')
        setFormData(initState)
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type='username'
                placeholder='Enter username'
                name='username'
                value={formData?.username}
                onChange={changeHandler}
            />
            <input
                type='password'
                placeholder='Enter password'
                name='password'
                value={formData?.password}
                onChange={changeHandler}
                required
            />
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default Login