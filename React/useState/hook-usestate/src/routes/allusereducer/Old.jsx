import React, { useState } from 'react'
import styles from './Old.module.css'

function Old() {

    const [user, setUser] = useState({
        rollNumber: '$123',
        fullName: 'Pushpendra Kulshreshtha',
        address: { city: 'Patna', state: 'BR' },
        male: true,
        general: true,
        quota: false,
        backlogs: 0
    })

    const reverseGender = () => setUser(prev => { return { ...user, male: !prev.male } })
    const reverseCategory = () => setUser(prev => { return { ...user, general: !prev.general } })
    const reverseQuota = () => setUser(prev => { return { ...user, quota: !prev.quota } })
    const addBacklogs = () => setUser(prev => { return { ...user, backlogs: prev.backlogs + 1} })

    return (
        <div>
            <div className={styles.userData}>
                <div>{`Roll: ${user.rollNumber}`}</div>
                <div>{`Name: ${user.fullName}`}</div>
                <div>{`City: ${user.address.city}, State: ${user.address.state}`}</div>
                <div>Gender: {user.male ? `Male` : `Female`}</div>
                <div>Quota: {user.quota ? `Front` : `Back`}</div>
                <div>Category: {user.general ? `yes` : `no`}</div>
                <div>{`Backlogs: ${user.backlogs}`}</div>
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