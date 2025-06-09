import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SuspenseLoader from "../loadscreens/suspenseloader/SuspenseLoader";

export default function AuthComponent() {

    // why used?    
    //useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <SuspenseLoader />
        // return <div>Loading...</div>
    }

    return <Outlet />
}