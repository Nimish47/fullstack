import { useLoaderData } from 'react-router-dom';
import styles from './Posts.module.css'


function Posts() {

    const data = useLoaderData();

    return (
        <div className={styles.container}>
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