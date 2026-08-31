"use strict";
// responseHandler()
function responseHandler(apiResponse) {
    return apiResponse.success ? apiResponse.data : apiResponse.error;
}
// hard data
const goodData = {
    success: true,
    data: { id: 501, name: "Rahul", email: "rahul@gmail.com" }
};
const badData = {
    success: false,
    error: "Email already registered"
};
// consume
const resp1 = responseHandler(goodData);
const resp2 = responseHandler(badData);
// print
console.log(resp1);
console.log(resp2);
