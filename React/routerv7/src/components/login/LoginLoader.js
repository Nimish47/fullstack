import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"


export const LoginLoader = () => {

    console.log('loader: login')
    
    if (isAuthenticated()) {
        return redirect("/");
    }
    return null;
}
