import React from 'react'
import styles from './Child2.module.css'
import { useDocument } from '../../../context/documentContext/DocumentContextComponent'

function Child2() {

    const { documents } = useDocument()

    console.log('child2')

    return (
        <div className={styles.container}>
            {documents.length > 0 ?  documents.length : 'None'}
        </div>
    )
}

export default Child2