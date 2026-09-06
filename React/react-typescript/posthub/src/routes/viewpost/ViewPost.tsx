import React, { useState, type ChangeEvent } from "react"
import styles from './ViewPost.module.css'
import { useNavigate, useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../redux/store"
import { useTheme } from "../../context/ThemeContext"


type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function ViewPost() {


  const [value, setValue] = useState<string | null>()
  const navigate = useNavigate()
  const [params] = useSearchParams();
  const { theme } = useTheme()


  const id = params.get("id")
  const posts = useSelector((state: RootState) => state.posts.data)

  let post: Partial<Post> = {}

  if (id && posts.length > 0) {
    const res = posts.find(item => Number(item.id) == Number(id))
    if(res) post = res
  }

  function isValidPost(post: unknown): post is Post {
    if (!post) return false
    if (typeof post !== "object") return false
    return (
      "id" in post &&
      "userId" in post &&
      "title" in post &&
      "body" in post
    )
  }


  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = `?id=${value}`;
    navigate(`/viewpost${query}`)
    setValue(null)
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div
      className={theme === "light"
        ? styles.viewpostlight
        : (theme === "dark" ? styles.viewpostdark : styles.viewpostpale)
      }>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='number'
          placeholder='Enter Id'
          name='idValue'
          value={value || ''}
          onChange={changeHandler}
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      {isValidPost(post) && (
        <div className={styles.display}>
          <div className={styles.id}>Id: {id}</div>
          <div className={styles.title}>{post.title}</div>
          <div className={styles.body}>{post.body}</div>
        </div>
      )
      }
    </div>
  )
}

export default ViewPost