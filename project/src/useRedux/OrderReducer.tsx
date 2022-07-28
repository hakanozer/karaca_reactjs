import { OrderList } from "../models/IOrders";
import { EOrder } from "./EOrder";

export interface OrderAction {
    type: EOrder,
    payload: OrderList[]
}


export const orderReducer = ( state: OrderList[] = [], action: OrderAction ) => {
    switch (action.type) {
        case EOrder.ORDER_LIST:
        return action.payload;
    
        default:
        return state;
    }
}

