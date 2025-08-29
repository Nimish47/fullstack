

export const fetchData = async () => {

    console.log('loader: fetchdata')

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');    
        // below line works even without await!
        // its because React Router sees the Promise and waits for it to resolve
        return response.json();
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}