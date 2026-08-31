import styles from './Home.module.css'

function Home() {

  const appName = import.meta.env.VITE_API_NAME
  const appBirth = import.meta.env.VITE_APP_BIRTH_YEAR
  const appLocation = import.meta.env.VITE_APP_LOCATION
  const env = import.meta.env.MODE
  return (
    <div className={styles.parent}>
      <div>Global: {appName} {appBirth}</div>
      <div>{env} {appLocation}</div>
    </div>
  )
}

export default Home
