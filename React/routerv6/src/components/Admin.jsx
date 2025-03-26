import { Link, Outlet } from "react-router-dom";

const Admin = () => {

    const obj = { contact: '98654327', address: 'A1101 Aditya' }

    return (
        <div>
            <h1>Welcome to the Admin Page</h1>
            <div><Link to='/contact/admin' state={obj}>Contact Us.</Link></div>
            <Outlet />
        </div>
    );
};

export default Admin;