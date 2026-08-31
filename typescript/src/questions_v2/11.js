"use strict";
// problem 11
function checkout(cart) {
    // check cart items in store    
    const item = store.find(item => item.productId === cart.productId);
    // if product not exists
    if (!item)
        return {
            status: "paymentFailed",
            error: "Payment declined"
        };
    // if product is out of stock
    if (item.quantity === 0)
        return {
            status: "outOfStock",
            productIds: [205]
        };
    // if item exists in store AND quantity > 0
    // update store
    item.quantity--;
    // return 
    return {
        status: "success",
        orderId: "ORD-9012",
        finalAmount: 5600
    };
}
// hard data
const store = [
    { productId: 101, quantity: 2 },
    { productId: 205, quantity: 1 },
    { productId: 905, quantity: 0 }
];
const rep1 = checkout({ productId: 905, quantity: 1 });
console.log(rep1);
console.log(store);
