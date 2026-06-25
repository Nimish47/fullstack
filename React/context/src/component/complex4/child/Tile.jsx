import React from 'react'
import styles from './Tile.module.css'

function Tile({ document, dispatch }) {

    const flagItem = () => dispatch({ type: "FLAG_TASK", payload: { id: document.id } })
    const deleteItem = () => dispatch({ type: "DELETE_TASK", payload: { id: document.id } })

    console.log('tile')

    return (
        <div className={document.flag ? styles.tileTrue : styles.tile}>
            <div className={styles.task}>{document.task}</div>
            <div className={styles.assigned}>{document.assigned}</div>
            <div className={styles.flag} onClick={flagItem}>flag</div>
            <div className={styles.delete} onClick={deleteItem}>delete</div>
        </div>
    )
}

export default React.memo(Tile);