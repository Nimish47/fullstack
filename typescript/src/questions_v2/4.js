"use strict";
// problem 4
// validate User
function isValidUser(user) {
    if (user == undefined)
        return false;
    if (typeof user !== "object")
        return false;
    if (!("id" in user) || !("username" in user) || !("email" in user))
        return false;
    if ("phone" in user && typeof user.phone !== "string")
        return false;
    return (typeof user.id === "number" &&
        typeof user.username === "string" &&
        typeof user.email === "string");
}
// sanitizeUsers()
function sanitizeUsers(users) {
    if (!Array.isArray(users))
        return [];
    const filteredUsers = users.filter(user => isValidUser(user));
    const modifiedUsers = filteredUsers.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
    return modifiedUsers;
}
// array of users - hardcode
const users = [
    { id: 2, username: "priya", email: "priya@gmail.com", phone: "9999999999", kamada: 'japan' },
    { id: 1, username: "rahul", email: "rahul@gmail.com" },
    { id: "wrong", username: "amit", email: "amit@gmail.com" },
    null,
    "garbage"
];
// consume
const data = sanitizeUsers(users);
// print
data.forEach(item => console.log(item));
