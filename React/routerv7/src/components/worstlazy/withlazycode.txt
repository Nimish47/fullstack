import React, { useEffect, useState } from 'react'
import styles from './WorstLazy.module.css'
// import _ from 'lodash';

function WorstLazy() {

    const [text, setText] = useState("")

    useEffect(() => {
        // const capsdata = _.capitalize('hello by danny')
        // setText(capsdata)

        import(/* webpackChunkName: "lodash" */ "lodash").then((module) => {
            //  Lodash uses CommonJS, so when you dynamically import it,
            //  it returns the lodash object as a default export.
            const _ = module.default;
            const capsdata = _.capitalize('hello by danny')
            setText(capsdata)
        });

    }, [])

    if (!text) {
        return <div>A bit late</div>
    }

    return (
        <div className={styles.lazycore}>
            {text}
        </div>
    )
}

export default WorstLazy