import React from 'react'
import styles from './Child1.module.css'
import { useDocument } from '../../../context/documentContext/DocumentContextComponent'
import Tile from './Tile'

function Child1() {

    const { documents } = useDocument()

    console.log('child1')

    return (
        <div className={styles.container}>
            {documents.map(document => <Tile document={document} key={document.id} />)}
        </div>
    )
}

export default Child1