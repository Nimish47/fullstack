import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminInfo = () => {

    const { state } = useLocation();

    return (
        <div>
            <p>Welcome to the admin panel.</p>
            <div>Contact: {state.contact}</div>
            <div>Address: {state.address}</div>
        </div>
    );
};

export default AdminInfo;