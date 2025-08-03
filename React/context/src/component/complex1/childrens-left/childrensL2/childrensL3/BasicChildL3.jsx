import React, { useContext } from 'react'
import styles from './BasicChildL3.module.css'
import { ThemeContext } from '../../../../../context/themecontext/ThemeContextComponent';

function BasicChildL3() {

    const { theme } = useContext(ThemeContext);

    console.log('render:great great grandchild:left')

    return (
        <div className={theme ? styles.containerGrey : styles.container}>GG Child(left)</div>
    )
}

export default BasicChildL3