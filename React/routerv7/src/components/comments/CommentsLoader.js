export const fetchAllComments = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(url);
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}