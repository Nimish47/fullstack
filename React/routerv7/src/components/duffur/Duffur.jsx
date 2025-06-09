import { Await, useLoaderData } from 'react-router-dom'
import TileFour from '../tileFour/TileFour'
import TileOne from '../tileOne/TileOne'
import TileThree from '../tileThree/TileThree'
import TileTwo from '../tileTwo/TileTwo'
import styles from './Duffur.module.css'
import { Suspense } from 'react'
import SuspenseLoader from '../loadscreens/suspenseloader/SuspenseLoader'

function Duffur() {



    return (<div>hello in duffer</div>)

    // const { tileOneData, tileTwoData, tileThreeData } = useLoaderData()

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.one}>
    //             <TileOne data={tileOneData} />
    //         </div>
    //         <div className={styles.two}>
    //             <Suspense fallback={<SuspenseLoader />}>
    //                 <Await resolve={tileTwoData}>
    //                     {(data) => <TileTwo data={data} />}
    //                 </Await>
    //             </Suspense>
    //         </div>
    //         <div className={styles.three}>
    //             <Suspense fallback={<SuspenseLoader />}>
    //                 <Await resolve={tileThreeData}>
    //                     {(data) => <TileThree data={data} />}
    //                 </Await>
    //             </Suspense>
    //         </div>
    //         <div className={styles.four}>
    //             <TileFour />
    //         </div>
    //     </div>
    // )
}

export default Duffur