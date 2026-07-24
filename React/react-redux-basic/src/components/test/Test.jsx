import React from 'react'
import styles from './Test.module.css'
import { useSelector } from 'react-redux';

function Test() {

  const fish = useSelector(state => state.zomato.fishAndChips);  // good design
  // const { orders } = useSelector(state => state.swiggy);  // bad design


  console.log('Test component rendered')
  return (
    <div className={styles.container}>{fish}</div>
  )
}

export default React.memo(Test)