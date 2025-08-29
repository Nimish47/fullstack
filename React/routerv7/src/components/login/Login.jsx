import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'


export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const changeHandler = (e) => {
        if (e.target.name === "username") setUsername(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            localStorage.setItem("username", username)
            localStorage.setItem("auth", "true")
            setUsername("");
            setPassword("");
            navigate('/', { replace: true });
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.image}></div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.loginForm}>
                    <div className={styles.text}>Willy Hills</div>
                    <input
                        type="text"
                        name='username'
                        value={username}
                        placeholder="Username"
                        className={styles.username}
                        onChange={changeHandler}
                    />
                    <input
                        type="password"
                        name='password'
                        value={password}
                        placeholder="Password"
                        className={styles.password}
                        onChange={changeHandler}
                    />
                    <input
                        onClick={handleLogin}
                        type='submit'
                        value={"Login"}
                        className={styles.loginbtn}>
                    </input>
                </div>
            </div>
        </div>
    )
}