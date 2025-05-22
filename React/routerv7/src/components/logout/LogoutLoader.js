import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"


export const LogoutLoader = () => {

    console.log('hello from logout loader')
    
    if (isAuthenticated()) {
        console.log('inside')
        return redirect("/");
    }
    return null;
}

