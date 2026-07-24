import { useLoaderData } from 'react-router-dom';
import styles from './Posts.module.css'
import { lazy, Suspense } from 'react';
import SuspenseLoader from '../loadscreens/suspenseloader/SuspenseLoader';
// import PostsChild from '../postschild/PostsChild'
const PostsChild = lazy(() => import(/* webpackChunkName: "PostsChild" */  "../postschild/PostsChild"))

function Posts() {

    const data = useLoaderData();

    return (
        <div className={styles.container}>
            <div className={styles.child}>
                <Suspense fallback={<SuspenseLoader />}>
                    <PostsChild />
                </Suspense>
            </div>
            <div className={styles.title}>Here are your posts! Nostalgia enough!!</div>
            <div className={styles.todoContainer}>
                {data.length && data.map(todo => (
                    <div className={styles.todo} key={todo.id}>"{todo.body}"</div>
                ))}
            </div>
        </div>
    )
}

export default Posts