import styles from './Question.module.css'
import search from '../images/search.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Question = () => {

    const [question, setQuestion] = useState('')
    const [oldDest, setOldDest] = useState(true);
    const [newDest, setNewDest] = useState(false);
    const navigate = useNavigate();

    const changeHandler = (e) => setQuestion(e.target.value)

    const enterKeyHandler = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitHandler();
        }
    }

    const submitHandler = () => {
        if (question.trim()) {
            const rollNumber = Math.floor(Math.random() * 1000);
            const query = `?name=${question}&rollNumber=${rollNumber}`;
            
            if (newDest) navigate('/questionv2' + query);
            else navigate('/question' + query);
        }
        else {
            alert('Please enter a valid question');
        }
    }

    const oldNewHandler = (e) => {
        console.log(e.target.dataset.name);

        if (e.target.dataset.name === 'old') {
            setOldDest(true);
            setNewDest(false);
        } else {
            
            setOldDest(false);
            setNewDest(true);
        }
    }

    return (
        <div>
            <div className={styles.questionContainer}>
                <input
                    name="question"
                    value={question}
                    onChange={changeHandler}
                    onKeyDown={enterKeyHandler}
                    className={styles.input}
                    type="text"
                    placeholder="Search all users..."
                />
                <div
                    className={styles.searchContainer}
                    onClick={submitHandler}>
                    <img src={search} alt="search" className={styles.search} />
                </div>
            </div>
            <div className={styles.oldnewContainer}>
                <div
                    onClick={oldNewHandler}
                    className={oldDest ? styles.active : styles.old}
                    data-name="old"
                > Old</div>
                <div
                    onClick={oldNewHandler}
                    className={newDest ? styles.active : styles.new}
                    data-name="new"
                > New </div>
            </div>

        </div>
    )
}