import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import styles from './Child2.module.css'

function Child2() {

    const prim = 123;
    const ref = useRef(0)

    // const non_prim = { fName: 'Arun' }
    // const fn = () => { console.log('Hi from function grandchild') }

    const non_prim = useMemo(() => { return { fName: 'Arun' } }, [])
    const fn = useCallback(() => { console.log('Hi from function grandchild') }, [])

    useEffect(() => {
        console.log('grandchild: mounted')
    }, [])

    useEffect(() => {
        console.log('grandchild: primitive')
    }, [prim])

    useEffect(() => {
        console.log('grandchild: nonprimitive')
    }, [non_prim])

    useEffect(() => {
        console.log('grandchild: function')
    }, [fn])

    useEffect(() => {
        console.log('grandchild: ref', ref)
    }, [ref])

    useEffect(() => {
        console.log('madman:grandchild')
        return () => { console.log('cleanup:grandchild') }
    })

    const updateRef = () => { 
        ref.current = ref.current + 1 
        console.log('updated ref value', ref.current)        
    }

    console.log('render grandchild')

    return (
        <div className={styles.container} onClick={updateRef}>
            {prim} - {non_prim.fName}
        </div>
    )
}

export default Child2