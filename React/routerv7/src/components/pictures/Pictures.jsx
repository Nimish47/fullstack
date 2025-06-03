import styles from './Pictures.module.css'
import { useLoaderData } from 'react-router-dom'


function Pictures() {

    const data = useLoaderData()

    return (
        <div className={styles.container}>
            <div className={styles.title}>A beautiful gallery right at your doorstep!</div>
            <div className={styles.todoContainer}>
                {data.length && data.map(todo => (
                    <div className={styles.todo} key={todo.id}>{todo.id}</div>
                ))}
            </div>
        </div>
    )
}

export default Pictures