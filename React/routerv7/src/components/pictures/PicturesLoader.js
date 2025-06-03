export const fetchAllPictures = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        const response = await fetch(url);
        return response.json();

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}