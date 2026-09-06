// import { redirect } from "react-router-dom";
import store from "../../redux/store";
// authenticate from redux

// const validUser = store.getState().userdetails.username

console.log('running auth')
console.log(store.getState())

export const AuthLoader = () => {
    // if (!validUser) return redirect("/login");    
    return null;
}


