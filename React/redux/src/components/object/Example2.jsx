import { useDispatch, useSelector } from 'react-redux'
import styles from './Example2.module.css'
import { updateAge, updateEmail, updateName, updateNameAndAge,resetAll } from './UserSlice'

export default function Example2() {

    const userState = useSelector(state => state.userState)
    const dispatch = useDispatch()

    const handleName = () => {
        const id = Math.floor(Math.random() * 10)
        const newName = `Harsh${id}`
        dispatch(updateName(newName))
    }

    const handleEmail = () => {
        const id = Math.floor(Math.random() * 10)
        const newEmail = `harsh@${id}`
        dispatch(updateEmail(newEmail))
    }

    const handleAge = () => {
        const id = Math.floor(Math.random() * 10)
        const newAge = id
        dispatch(updateAge(newAge))
    }

    const handleNameAndAge = () => {
        const id = Math.floor(Math.random() * 10)
        const newName = `Ajit${id}`
        const newAge = id
        dispatch(updateNameAndAge({ name: newName, age: newAge }))
    }

    const handleReset = () => dispatch(resetAll())

    return (
        <div className={styles.container}>
            <div className={styles.values}>
                <div>{userState.name}</div>
                <div>{userState.age}</div>
                <div>{userState.email}</div>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleName}>Change Name</button>
                <button onClick={handleAge}>Change Age</button>
                <button onClick={handleEmail}>Change Email</button>
                <button onClick={handleNameAndAge}>Change Name and Age</button>
                <button onClick={handleReset}>Reset</button>
            </div>

        </div>
    )
}
