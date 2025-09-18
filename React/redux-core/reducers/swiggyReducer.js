const { produce } = require('immer')

const ORDER_FOOD_SWIGGY = "ORDER_FOOD_SWIGGY"
const REFILL_STOCK_SWIGGY = "REFILL_STOCK_SWIGGY"
const ORDER_FOOD_ANY_PLATFORM = "ORDER_FOOD_ANY_PLATFORM"

const orderFoodSwiggy = (orderDetails) => ({ type: ORDER_FOOD_SWIGGY, payload: orderDetails })
const refillFoodSwiggy = (orderDetails) => ({ type: REFILL_STOCK_SWIGGY, payload: orderDetails })

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
            case ORDER_FOOD_SWIGGY:
                draft[action.payload.item] = draft[action.payload.item] - action.payload.quantity;
                break;
            case REFILL_STOCK_SWIGGY:
                draft[action.payload.item] = draft[action.payload.item] + action.payload.quantity;
                break;
                case ORDER_FOOD_ANY_PLATFORM:
                draft[action.payload.item] = draft[action.payload.item] - action.payload.quantity;
                break;    
        }
    })
}

module.exports = {
    swiggyReducer: reducer,
    swiggyActions: { orderFoodSwiggy, refillFoodSwiggy }
}