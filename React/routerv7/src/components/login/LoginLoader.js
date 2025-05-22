import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"


export const LoginLoader = () => {

    console.log('hello from login loader')
    
    if (isAuthenticated()) {
        return redirect("/");
    }
    return null;
}
