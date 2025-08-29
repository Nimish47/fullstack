import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"

export const LogoutLoader = () => {

    console.log('loader: logout')
    
    if (isAuthenticated()) {
        return redirect("/");
    }
    return null;
}

