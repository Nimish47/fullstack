import { Outlet } from "react-router-dom";

const Group = () => {
    return (
        <>
            <div>group top</div>
            <div>
                <Outlet />
            </div>
            <div>group bottom</div>
        </>
    );
};

export default Group;