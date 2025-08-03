import React, { useContext } from 'react'
import BasicChild from './childrens/BasicChild'
import styles from './Basic.module.css'
import { ThemeContext } from '../../context/themecontext/ThemeContextComponent';

function Basic() {

    const { theme, toggler } = useContext(ThemeContext);

    console.log('render:parent')

    return (
        <div className={theme ? styles.containerGrey : styles.container}>
            <div>A very basic context</div>
            <div className={styles.toggler} onClick={toggler}>Toggle</div>
            <BasicChild />
        </div>
    )
}

export default Basic