import React, { useEffect, useState } from 'react'
import styles from './WorstLazy.module.css'
import _ from 'lodash';

function WorstLazy() {


    return (
        <div className={styles.lazycore}>
            {_.capitalize("hello Year")}
        </div>
    )
}

export default WorstLazy