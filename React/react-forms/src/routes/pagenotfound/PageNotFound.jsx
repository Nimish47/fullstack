import React from 'react'
import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className={styles.container}>
      Page not Found!
      <Link className={styles.link} to="/">
        Home
      </Link>
    </div>
  )
}

export default PageNotFound