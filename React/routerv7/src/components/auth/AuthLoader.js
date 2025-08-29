import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"

export const AuthLoader = () => {

    console.log('loader: authloader')

    if (!isAuthenticated()) return redirect("/login");    

    return null;
}


