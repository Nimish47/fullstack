import { Link, useLocation, useRouteError } from "react-router-dom";

const Error = () => {

    const errObject = useRouteError()
    const locObject = useLocation()

    if (locObject.pathname === '/protected') return <h1>Get admin rights buddy!</h1>

    return (
        <div>
            <h1>Status: {errObject.status}</h1>
            <h1>Message: {errObject.data}</h1>
            <div>
                <Link to="/">Go back to Home Page</Link>
            </div>
            <div>
                <Link to="/contact/admin">Request Admin Access</Link>
            </div>
        </div>
    );
};

export default Error;