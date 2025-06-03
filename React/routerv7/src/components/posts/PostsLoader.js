export const fetchAllPosts = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}