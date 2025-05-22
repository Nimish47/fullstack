

export const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');    
        return response.json();
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}