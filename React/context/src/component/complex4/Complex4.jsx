import React from 'react'
import styles from './Complex4.module.css'
import Child1 from './child/Child1'
import Child2 from './child/Child2'
import DocumentContextComponent from '../../context/documentContext/DocumentContextComponent'

function Complex4() {

    console.log('parent')

    return (
        <div className={styles.container}>
            <DocumentContextComponent>
                <Child1 />
                <Child2 />
            </DocumentContextComponent>
        </div>
    )
}

export default Complex4