import { AppStateType } from '../Redux'

export const getCart = (state: AppStateType) => {
    return state.cartReducer.Pizza
};

export const getTotalPizzaOrder = (state: AppStateType) => {
    return state.cartReducer.totalPizzaOrder
};