

export const fetchUser = async ({params}) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
        //const response = await fetch(url);    
        // return response.json();
        return fetch(url)   // surprisingly this works too
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}