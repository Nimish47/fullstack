import React, { useReducer } from 'react'
import styles from './New.module.css'
import userReducer, { ACTION_TYPES, INIT_STATE } from './userReducer'

function New() {

    const [user, dispatch] = useReducer(userReducer, INIT_STATE)

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
                <div onClick={() => dispatch({ type: ACTION_TYPES.REVERSE_GENDER })}>Gender Reverse</div>
                <div onClick={() => dispatch({ type: ACTION_TYPES.REVERSE_CATEGORY })}>Category reverse</div>
                <div onClick={() => dispatch({ type: ACTION_TYPES.REVERSE_QUOTA })}>Quota reverse</div>
                <div onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_BACKLOGS, payload: { count: 4 } })}>Add backlogs</div>
            </div>
        </div>
    )
}

export default New