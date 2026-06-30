import React, { useState } from 'react'
import styles from './Old.module.css'

function Old() {

    const [rollNumber] = useState('$123');
    const [fullName] = useState('Pushpendra Kulshreshtha');
    const [address] = useState({ city: 'Patna', state: 'BR' });
    const [male, setMale] = useState(true);
    const [general, setGeneral] = useState(true);
    const [quota, setQuota] = useState(false);
    const [backlogs, setBacklogs] = useState(0);
    const reverseGender = () => setMale(prev => !prev)
    const reverseCategory = () => setGeneral(prev => !prev)
    const reverseQuota = () => setQuota(prev => !prev)
    const addBacklogs = () => setBacklogs(prev => prev + 1)

    return (
        <div>
            <div className={styles.userData}>
                <div>{`Roll: ${rollNumber}`}</div>
                <div>{`Name: ${fullName}`}</div>
                <div>{`City: ${address.city}, State: ${address.state}`}</div>
                <div>Gender: {male ? `Male` : `Female`}</div>
                <div>Quota: {quota ? `Front` : `Back`}</div>
                <div>Category: {general ? `yes` : `no`}</div>
                <div>{`Backlogs: ${backlogs}`}</div>
            </div>
            <div className={styles.actions}>
                <div onClick={reverseGender}>Gender Reverse</div>
                <div onClick={reverseCategory}>Category reverse</div>
                <div onClick={reverseQuota}>Quota reverse</div>
                <div onClick={addBacklogs}>Add backlogs</div>
            </div>
        </div>
    )
}

export default Old