import styles from './Comments.module.css'
import { useLoaderData } from 'react-router-dom'


function Comments() {

    const data = useLoaderData();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Here are your loved comments buddy!!</div>
            <div className={styles.todoContainer}>
                {data.length && data.map(todo => (
                    <div className={styles.todo} key={todo.id}>"{todo.name}"</div>
                ))}
            </div>
        </div>
    )
}

export default Comments