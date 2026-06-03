export const fetchAllComments = async () => {
    try {
        const delay = (ms) => new Promise(res => setTimeout(res, ms))

        const url = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(url);
        // if(response.status === 404) throw new Response(); 
        await delay(2000)
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
        // throw new Response("Network error while fetching data");
    }
}