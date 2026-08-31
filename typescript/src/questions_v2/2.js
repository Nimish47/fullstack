"use strict";
// problem 2
// displayOrderMessage()
function displayMessage(obj) {
    if (obj.status === "placed")
        return "Order: " + obj.status + " Placed At: " + obj.placedAt;
    else if (obj.status === "shipped")
        return "Order: " + obj.status + " Tracking Number: " + obj.trackingNumber;
    else if (obj.status === "delivered")
        return "Order: " + obj.status + " Delivered Date: " + obj.deliveredAt;
    else if (obj.status === "cancelled")
        return "Order: " + obj.status + " Cancellation Reason: " + obj.reason;
    else
        return 'Invalid status';
}
// create hard data
const status1 = { status: "shipped", trackingNumber: "TRK12345" };
const status2 = { status: "cancelled", reason: "Customer requested cancellation" };
// consume
const result1 = displayMessage(status1);
const result2 = displayMessage(status2);
console.log(result1);
console.log(result2);
