export const fetchAllComments = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/comments';
        const response = await fetch(url);
        // if(response.status === 404) throw new Response(); 
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
        // throw new Response("Network error while fetching data");
    }
}