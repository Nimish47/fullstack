import React, { useEffect, useState } from 'react'
import styles from './Todos.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomLoader from '../loadscreens/customloader/CustomLoader'


function Todos() {

    const [todos, setTodos] = useState([])

    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllTodos()
    }, []);

    useEffect(() => {
        if (error) {
            navigate('/error', {
                state: { errorMessage: message, fromRoute: location.pathname },
            })
        }
    }, [error])

    const fetchAllTodos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            setTodos(data)
        } catch (error) {
            console.error('Error fetching todos:', error);
            setError(true);
            setMessage(error);
        }
    }

    // authcomponent loader won't handle this
    // this is because - no route change here
    // api call after component loads
    if (!todos.length) return <CustomLoader />

    return (
        <div className={styles.container}>
            <div className={styles.title}>Finish these lists ASAP!!!</div>
            <div className={styles.todoContainer}>
                {todos.length && todos.map(todo => (
                    <div className={styles.todo} key={todo.id}>{todo.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Todos