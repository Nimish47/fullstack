import React, { useEffect, useState } from 'react'
import styles from './Swiggy.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, orderBeer, orderFishAndChips, updateNumOfOrders, logHandler } from '../../redux/slice/swiggySlice'
import Loader from '../../components/loader/Loader'
import Test from '../../components/test/Test'

function Swiggy() {

    const [item1, setItem1] = useState(false)
    const [item2, setItem2] = useState(false)
    const orders = useSelector(state => state.swiggy.orders)
    const posts = useSelector(state => state.swiggy.posts)
    // const { orders, posts } = useSelector(state => state.swiggy)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, []);

    // async await works here
    const fetchData = async () => {
        const URL = 'https://jsonplaceholder.typicode.com/posts';
        try {
            const result = await dispatch(fetchPosts(URL)); // Await the dispatch
            console.log('Fetch result:', result); // Logs the result of the fetchPosts thunk
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const orderItem1 = () => setItem1(prev => !prev)
    const orderItem2 = () => setItem2(prev => !prev)

    const placeOrder = () => {
        if (item1 || item2) {
            item1 && dispatch(orderFishAndChips(1))
            item2 && dispatch(orderBeer(5))
            dispatch(updateNumOfOrders())

            // after dispatch, reset values
            setItem1(false)
            setItem2(false)
        }
    }

    const clickReviews = () => {
        dispatch(logHandler())
    }

    console.log('swiggy comp renderedx')

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
                        {posts.loading ? <Loader /> : (<div>
                            <div className={styles.count}>{posts.count}</div>
                            <div onClick={clickReviews} className={styles.verbiage}>user reviews</div>
                        </div>)}
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
            <div>
                <Test />
            </div>
        </div>
    )
}

export default Swiggy