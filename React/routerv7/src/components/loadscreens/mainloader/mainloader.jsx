import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SuspenseLoader from "../suspenseloader/SuspenseLoader";

export default function MainLoader() {

    const navigation = useNavigation();

    console.log('navigation: ', navigation.state)

    if (navigation.state === "loading") return <SuspenseLoader />
    return null   

}