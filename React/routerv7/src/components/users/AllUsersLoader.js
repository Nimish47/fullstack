import { redirect } from "react-router-dom";



export const fetchAllUsers = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const response = await fetch(url);
        // return response.json();
        const data = await response.json();
        const modifiedResponse = addSpecialUser(data)
        return modifiedResponse;

    } catch (error) {
        console.log("Error fetching data:", error);
        return redirect('/error')
    }
}


const addSpecialUser = (users) => {
    const specialUser = { id: 47, name: "Hitman 47"}
    return [...users, specialUser];
};