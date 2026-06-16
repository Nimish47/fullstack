import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './Case2F.module.css'
import BigList from './BigList'
import Counter from './Counter'
import Animal from './Animal'

function Case2F() {

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    const [pops, setPops] = useState(false)

    // primitive value, no need to memoize
    const type = "MAMMALS"

    useEffect(() => {
        // faking a big array
        let arr = []
        for (let index = 0; index < 1000; index++) {
            arr[index] = index;
        }

        //imitating an API call
        const id = setTimeout(() => { setList([...list, ...arr]) }, 1000);

        // clearing the timeout
        return () => { clearTimeout(id) }
    }, [])

    const incrementCounter = useCallback(() => setCount(prev => prev + 1), [])

    // const incrementCounter = () => setCount(prev => prev + 1)

    const logger = useCallback((index) => {
        console.log(`Someone clicked list id: ${index}`)
    }, [])
    // const logger = (index) => { console.log(`Someone clicked list id: ${index}`) }

    if (!list.length) return <div className={styles.noshowcontainer}>Nothing here buddy!</div>

    console.log('render parent')

    return (
        <div className={styles.container}>
            <div className={styles.firstContainer}>
                <div className={styles.counterContainer}>
                    <Counter
                        count={count}
                        incrementCounter={incrementCounter}
                    />
                </div>
                <div className={styles.animalContainer}>
                    <Animal type={type} />
                    <div
                        style={{ backgroundColor: 'blue', padding: '10px', border: '1px solid white' }}
                        onClick={() => setPops(prev => !prev)}
                    >pops
                    </div>
                </div>
            </div>
            <div className={styles.listContainer}>
                {list.map((listitem, index) => (
                    <BigList
                        key={index}
                        item={listitem}
                        logger={logger}
                    />
                ))}
            </div>
        </div>
    )
}

export default Case2F