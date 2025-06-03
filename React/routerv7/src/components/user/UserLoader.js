

export const fetchUser = async ({params}) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/users/${params.userId}`;
        const response = await fetch(url);    
        return response.json();
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}