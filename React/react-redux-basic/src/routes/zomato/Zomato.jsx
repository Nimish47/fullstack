import React, { useEffect, useState } from 'react'
import styles from './Zomato.module.css'
import { orderBeer, orderFishAndChips, updateNumOfOrders } from '../../redux/slice/zomatoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Test from '../../components/test/Test'

function Zomato() {

    const [item1, setItem1] = useState(false)
    const [item2, setItem2] = useState(false)
    const [count, setCount] = useState(0)
    const URL = 'https://jsonplaceholder.typicode.com/users'

    const orders = useSelector(state => state.zomato.orders);
    const dispatch = useDispatch()

    useEffect(() => {
        setCount(fetchSomething())
    }, [])

    const fetchSomething = async () => {
        const res = await fetch(URL)
        const data = await res.json()
        return data.length
    }

    const orderItem1 = () => setItem1(prev => !prev)
    const orderItem2 = () => setItem2(prev => !prev)




    const placeOrder = () => {
        if (item1 || item2) {
            item1 && dispatch(orderFishAndChips(5))
            item2 && dispatch(orderBeer(5))
            dispatch(updateNumOfOrders())

            // after dispatch, reset values
            setItem1(false)
            setItem2(false)
        }
    }

    console.log('zomato comp renderedx')

    return (
        <div className={styles.container}>
            <div className={styles.leftPane}>
                <div>
                    <div onClick={orderItem1} className={item1 ? styles.item1Active : styles.item1}>Fish and Chips</div>
                    <div onClick={orderItem2} className={item2 ? styles.item2Active : styles.item2}>Beer</div>
                </div>
            </div>
            <div className={styles.rightPane}>
                <div className={styles.realtime}>
                    <div className={styles.box1}>
                        <div>
                            <div className={styles.count}>{count}</div>
                            <div className={styles.verbiage}>user reviews</div>
                        </div>
                    </div>
                    <div className={styles.box2}>
                        <div>
                            <div className={styles.count}>{orders}</div>
                            <div className={styles.verbiage}>orders placed</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={(item1 || item2) ? styles.placeOrderActive : styles.placeOrder}
                onClick={placeOrder}
            >
                Place Order
            </div>
            <div className={styles.test}>
                <Test />
            </div>
        </div>
    )
}

export default Zomato