import { useNavigation } from "react-router-dom";
import GlobalLoader from "../globalLoader/GlobalLoader";

export default function MainLoader() {

    const navigation = useNavigation();

    console.log('navigation: ', navigation.state)

    if (navigation.state === "loading") return <GlobalLoader />
    return null   

}