import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import styles from './Post.module.css'
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/slice/PostSlice";

function Post() {

  const { id } = useParams()
  const data = useLoaderData()
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const removePost = () => {
    dispatch(deletePost(id))
    navigate('/posts', { replace: true })
  }

  return (
    <div className={styles.post}>
      <div className={styles.item}>
        <div className={styles.id}>Id: {id}</div>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.body}>{data.body}</div>
        <div className={styles.button} onClick={removePost}>Delete user</div>
      </div>
    </div>
  )
}

export default Post