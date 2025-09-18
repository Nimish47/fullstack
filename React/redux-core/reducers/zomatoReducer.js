const { produce } = require('immer')

const ORDER_FOOD_ZOMATO = "ORDER_FOOD_ZOMATO"
const REFILL_STOCK_ZOMATO = "REFILL_STOCK_ZOMATO"
const ORDER_FOOD_ANY_PLATFORM = "ORDER_FOOD_ANY_PLATFORM"

const orderFoodZomato = (orderDetails) => ({ type: ORDER_FOOD_ZOMATO, payload: orderDetails })
const refillFoodZomato = (orderDetails) => ({ type: REFILL_STOCK_ZOMATO, payload: orderDetails })

const initialState = {
    biryani: 100,
    pizza: 10,
    burger: 50,
    chapati: 500,
    curry: 25
}

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case ORDER_FOOD_ZOMATO:
                draft[action.payload.item] = draft[action.payload.item] - action.payload.quantity;
                break;
            case REFILL_STOCK_ZOMATO:
                draft[action.payload.item] = draft[action.payload.item] + action.payload.quantity;
                break;
            case ORDER_FOOD_ANY_PLATFORM:
                draft[action.payload.item] = draft[action.payload.item] - action.payload.quantity;
                break;      
        }
    })

}

module.exports = {
    zomatoReducer: reducer,
    zomatoActions: { orderFoodZomato, refillFoodZomato }
}