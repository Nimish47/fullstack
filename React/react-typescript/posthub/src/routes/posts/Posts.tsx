import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../redux/store"
import { fetchPosts } from "../../redux/slice/PostSlice"
import { useEffect } from "react"
import styles from './Posts.module.css'
import Card from "../../components/card/Card"

function Posts() {

  const status = useSelector((state: RootState) => state.posts.status)
  const posts = useSelector((state: RootState) => state.posts.data)
  const errMessage = useSelector((state: RootState) => state.posts.errorMessage)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (posts.length === 0) getAllPosts()
  }, [])

  async function getAllPosts() {
    try {
      const URL = "https://jsonplaceholder.typicode.com/posts"
      await dispatch(fetchPosts(URL))
    } catch (error) {
      console.log('Some error occured')
    }
  }

  if (status === "idle" && posts.length === 0) {
    return (
      <div className={styles.posts}>
        <h1>Nothing to display</h1>
        <div onClick={getAllPosts}>Fetch Posts</div>
      </div>
    )
  }

  if (status === "pending") {
    return (
      <div className={styles.posts}>
        Fetching Posts....
      </div>
    )
  }

  if (status === "failure") {
    return (
      <div className={styles.posts}>
        <div>{errMessage}</div>
        <div onClick={getAllPosts}>Try Again</div>
      </div>
    )
  }

  if (posts.length > 0) {
    return (
      <div className={styles.postsGrid}>
        {posts.map(post =>
          <Card
            id={Number(post.id)}
            userId={Number(post.userId)}
            title={post.title}
            body={post.body}
            key={Number(post.id)}
          />
        )}
      </div>
    )
  }
}

export default Posts