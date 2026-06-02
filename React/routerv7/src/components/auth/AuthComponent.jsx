import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import MainLoader from "../loadscreens/mainloader/mainloader";

export default function AuthComponent() {

  return (
    <>
      <MainLoader />
      <Outlet />
    </>
  );    

}