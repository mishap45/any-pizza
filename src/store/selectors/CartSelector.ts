import { AppStateType } from '../Redux'

export const getCart = (state: AppStateType) => {
    return state.cartReducer.Pizza
};