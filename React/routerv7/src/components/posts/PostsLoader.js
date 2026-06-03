export const fetchAllPosts = async () => {
    try {

        const delay = (ms) => new Promise(res => setTimeout(res, ms))

        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        await delay(2000)
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}