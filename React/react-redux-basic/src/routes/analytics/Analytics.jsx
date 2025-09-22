import React, { useState } from 'react'
import styles from './Analytics.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { refillStock, refillStockSwiggy, refillStockZomato } from '../../redux/slice/restaurantSlice';

function Analytics() {

  const [flagS, setFlagS] = useState(false)
  const [flagZ, setFlagZ] = useState(false)


  const { orders: ordersSwiggy,
    fishAndChips: fishAndChipsSwiggy,
    beer: beerSwiggy } = useSelector((state) => state.swiggy);

  const { orders: ordersZomato,
    fishAndChips: fishAndChipsZomato,
    beer: beerZomato } = useSelector((state) => state.zomato);

  const { badHits } = useSelector((state) => state.restaurant)

  const dispatch = useDispatch()

  const toggleFlagS = () => setFlagS(prev => !prev)
  const toggleFlagZ = () => setFlagZ(prev => !prev)

  const approveRequest = () => {
    if (flagS && flagZ) {
      dispatch(refillStock())
      return;
    }
    if (flagS) {
      dispatch(refillStockSwiggy())
      return;
    }
    if (flagZ) {
      dispatch(refillStockZomato())
      return;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <div className={styles.serviceName}>
          Swiggy
        </div>
        <div className={styles.leftContent}>
          <div className={styles.flex}>
            <div className={styles.count}>{fishAndChipsSwiggy}</div>
            <div className={styles.label}>fish and chips left</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.count}>{beerSwiggy}</div>
            <div className={styles.label}>beers left</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.count}>{ordersSwiggy}</div>
            <div className={styles.label}>order(s) placed</div>
          </div>
          <div className={styles.flex}>
            <div
              className={flagS ? styles.restockindividualActive : styles.restockindividual}
              onClick={toggleFlagS}
            >Restock</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPane}>
        <div className={styles.serviceName}>
          Zomato
        </div>
        <div className={styles.leftContent}>
          <div className={styles.flex}>
            <div className={styles.count}>{fishAndChipsZomato}</div>
            <div className={styles.label}>fish and chips left</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.count}>{beerZomato}</div>
            <div className={styles.label}>beers left</div>
          </div>
          <div className={styles.flex}>
            <div className={styles.count}>{ordersZomato}</div>
            <div className={styles.label}>order(s) placed</div>
          </div>
          <div className={styles.flex}>
            <div
              className={flagZ ? styles.restockindividualActive : styles.restockindividual}
              onClick={toggleFlagZ}
            >Restock</div>
          </div>
        </div>
      </div>
      <div
        className={(flagZ || flagS) ? styles.bottomPaneActive : styles.bottomPane}
        onClick={approveRequest}
      >
        Approve request(s)</div>
      <div className={styles.badHitsContainer}>
        <div className={styles.badHits}>{badHits}</div>
        <div className={styles.badhitslabel}>bad hits</div>
      </div>
    </div>
  )
}

export default Analytics