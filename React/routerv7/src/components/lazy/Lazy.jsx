import styles from './Lazy.module.css'
import panda from '../images/panda.png'
import angry from '../images/angry.png'
import hearts from '../images/hearts.png'
import muscular from '../images/muscular.png'
import shocked from '../images/shocked.png'
import { useNavigate } from 'react-router-dom'


function Lazy() {

    const navigate = useNavigate()

    const goToPage = (e) => {
        if (e.currentTarget.dataset.name === 'todos')
            navigate('/todos')
        else if (e.currentTarget.dataset.name === 'pictures')
            navigate('/pictures')
        else if (e.currentTarget.dataset.name === 'comments')
            navigate('/comments')
        else if (e.currentTarget.dataset.name === 'posts')
            navigate('/posts')
        else if (e.currentTarget.dataset.name === 'goodlazywrapper')
            navigate('/goodlazywrapper')
        else if (e.currentTarget.dataset.name === 'badlazy')
            navigate('/badlazy')
        else if (e.currentTarget.dataset.name === 'worstlazy')
            navigate('/worstlazy')
        else
            alert('Invalid page name');
    }

    return (
        <div className={styles.container}>
            <img className={styles.panda} src={panda} alt='panda' />
            <div
                className={styles.todos}
                data-name='todos'
                onClick={goToPage}
            > Finish these todos! <img src={angry} className={styles.image} alt='todoimage' />
            </div>
            <div
                className={styles.pictures}
                data-name='pictures'
                onClick={goToPage}
            > So many pictures <img src={shocked} className={styles.image} alt='pictures' />
            </div>
            <div
                className={styles.goodlazy}
                data-name='goodlazywrapper'
                onClick={goToPage}
            ><div className={styles.text}>Lazy via Axios</div>
            </div>
            <div
                className={styles.badlazy}
                data-name='badlazy'
                onClick={goToPage}
            > <div className={styles.text}>Lazy via Chart.js</div>
            </div>
            <div
                className={styles.worstlazy}
                data-name='worstlazy'
                onClick={goToPage}
            >  <div className={styles.text}>Lazy via lodash</div>
            </div>
            <div
                className={styles.comments}
                data-name='comments'
                onClick={goToPage}
            > Comments about me <img src={hearts} className={styles.image} alt='comments' />
            </div>
            <div
                className={styles.posts}
                data-name='posts'
                onClick={goToPage}
            > Nostalgia Posts! (#staystrong) <img src={muscular} className={styles.image} alt='posts' />
            </div>
        </div>
    )
}

export default Lazy