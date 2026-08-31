"use strict";
// Real API: Posts
function isValidPost(post) {
    if (post == undefined)
        return false;
    if (typeof post !== "object")
        return false;
    if (!("userId" in post) || !("id" in post) || !("title" in post) || !("body" in post))
        return false;
    return (typeof post.userId === "number" &&
        typeof post.id === "number" &&
        typeof post.title === "string" &&
        typeof post.body === "string");
}
function sanitizeData(arr) {
    return arr.filter(item => isValidPost(item)).map(item => ({ id: item.id, title: item.title }));
}
function logger(arr) {
    arr.forEach(item => console.log(item));
}
async function main() {
    try {
        const APIURL = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(APIURL);
        const data = await response.json();
        const result = sanitizeData(data);
        logger(result);
    }
    catch (error) {
        console.log("Failed to load posts");
    }
}
main();
