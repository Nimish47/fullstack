import { Outlet } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <h1>Welcome to the Contact Page</h1>
            <Outlet />
        </div>
    );
};

export default Contact;