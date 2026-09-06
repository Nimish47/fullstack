import { Link } from "react-router-dom"
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.logo}>Nishant App</div>
      <div className={styles.flexContainer}>
        <Link to='viewpost'><div>View Post</div></Link>
        <Link to='posts'><div>View all posts</div></Link>
        <Link to='createpost'><div>Create Post</div></Link>
        <Link to='user'><div>User details</div></Link>
        <Link to='logout'><div> Logout</div></Link>
      </div>
    </div>
  )
}

export default Home