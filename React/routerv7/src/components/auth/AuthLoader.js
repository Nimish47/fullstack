import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"

export const AuthLoader = () => {

    console.log('from the auth loader')

    if (!isAuthenticated()) {
        return redirect("/login");
    }
    return null;
}


