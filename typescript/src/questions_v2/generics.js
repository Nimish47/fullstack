"use strict";
// understanding the need of generics
const allUsers = {
    count: 23,
    data: [
        { userId: 123, userName: 'Aman' },
        { userId: 126, userName: 'Kishan' },
        { userId: 186, userName: 'Purav' }
    ]
};
function getUsers(users) {
    return users.count;
}
const allPosts = {
    count: 99,
    data: [
        { postId: 123, courierName: 'DTDC' },
        { postId: 126, courierName: 'Speed Post' },
        { postId: 186, courierName: 'Fedex' }
    ]
};
function getPosts(posts) {
    return posts.count;
}
function getData(data) {
    return data.count;
}
console.log(getUsers(allUsers));
console.log(getData(allUsers));
console.log(getData(allPosts));
