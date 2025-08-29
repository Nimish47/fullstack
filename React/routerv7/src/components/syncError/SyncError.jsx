import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function SyncError() {

    const { source } = useParams()
    const navigate = useNavigate()

    if (source === 'component') {
        // some gibberish to throw error
        // without a errorElement this will crash the app
        console.log([].map())
    }

    const triggerError = () => {
        // not handled via errorElement
        // need to use try-catch block
        try {
            console.log([].map())
        } catch (error) {
            navigate('/error')
        }
    }

    return (
        <div style={{
            backgroundColor: 'maroon',
            height: '100vh',
            fontSize: '3em',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <div style={{ backgroundColor: 'black', padding: '10px' }}>A beautiful day! in {source.toLocaleUpperCase()}</div>
            <div
                style={{ backgroundColor: 'grey', padding: '20px', marginLeft: '70px' }}
                onClick={triggerError}
            >
                Trigger
            </div>
        </div>
    )
}

export default SyncError