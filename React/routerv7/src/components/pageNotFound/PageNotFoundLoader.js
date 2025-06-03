import { redirect } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem("auth") === "true"


export const TrafficPolice = () => {

    if (!isAuthenticated()) return redirect("/login");
    return null;
}

