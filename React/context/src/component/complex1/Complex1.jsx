import React, { useContext } from 'react'
import styles from './Complex1.module.css'
import BasicChildRight from './childrens-right/BasicChildRight'
import BasicChildLeft from './childrens-left/BasicChildLeft'
import { ThemeContext } from '../../context/themecontext/ThemeContextComponent';
import { BeautyContext } from '../../context/beautifierContext/BeautifierContextComponent';

function Complex1() {

    const { theme, toggler } = useContext(ThemeContext);
    const { beautify, toggleBeautifier } = useContext(BeautyContext)

    console.log('render:parent')

    return (
        <div className={theme ? styles.containerGrey : styles.container}>
            <div className={styles.label}>Tree</div>
            <div className={beautify ? styles.beautifierCurved: styles.beautifier} onClick={toggleBeautifier}>L2 Beautifier</div>
            <div className={styles.toggler} onClick={toggler}>L3 Toggler</div>
                <BasicChildLeft />
                <BasicChildRight />
        </div>
    )
}

export default Complex1