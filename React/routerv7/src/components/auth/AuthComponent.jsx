import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SuspenseLoader from "../loadscreens/suspenseloader/SuspenseLoader";

export default function AuthComponent() {

    // why used?    
    // useLoaderData();

    const navigation = useNavigation();

    // console.log('navigation: ', navigation.state)

    if (navigation.state === "loading") return <SuspenseLoader />
    return <Outlet />

//   return (
//     <>
//       {navigation.state === "loading" && <SuspenseLoader />}
//       <Outlet />
//     </>
//   );    

}