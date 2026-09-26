import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../../redux/store"
import styles from './User.module.css'
import { updatePassword } from "../../redux/slice/UserSlice"
import React, { useReducer, useState, type ChangeEvent } from "react"
import { useTheme } from "../../context/ThemeContext"
import { FEEDBACK_INIT_STATE, FeedbackReducer } from "./FeedbackReducer"

function User() {

  const [password, setPassword] = useState('')
  const username = useSelector((state: RootState) => state.userdetails.username)
  const dispatch = useDispatch<AppDispatch>()
  const { theme, changeTheme } = useTheme()

const [feedback, dispatchFeedback] = useReducer(FeedbackReducer, FEEDBACK_INIT_STATE)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updatePassword(password))
    setPassword('')
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className={theme === "light"
      ? styles.userlight
      : (theme === "dark" ? styles.userdark : styles.userpale)}>
      <h1>{`Welcome ${username}`}</h1>

      <div className={styles.themetogglers}>
        <div onClick={() => changeTheme("light")} >Light</div>
        <div onClick={() => changeTheme("dark")}>Dark</div>
        <div onClick={() => changeTheme("pale")}>Pale</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='password'
          placeholder='Update password'
          name='password'
          value={password}
          onChange={changeHandler}
          required
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className={styles.feedbackbuttons}>
        {feedback && <div>{feedback.feedback}</div>}
        <div onClick={() => dispatchFeedback({type: "good", appreciation: "like the app"})} >I like your app</div>
        <div onClick={() => dispatchFeedback({type: "bad", escalation: "shitty app"})}>The App is terrible!</div>      
      </div>
    </div>
  )
}

export default User