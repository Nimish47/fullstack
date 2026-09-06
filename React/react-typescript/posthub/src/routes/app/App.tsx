import { Navigate, Outlet } from "react-router-dom"
import styles from './App.module.css'
import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"

function App() {

  const username = useSelector((state: RootState) => state.userdetails.username)
  if (!username) return <Navigate to='/login' />

  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  )
}

export default App