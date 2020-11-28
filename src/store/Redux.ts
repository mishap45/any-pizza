import {combineReducers, createStore} from 'redux'
import CartReducer from './reducers/CartReducer'

let reducersBox = combineReducers({
    cartReducer: CartReducer
});

type rootReducerType = typeof reducersBox;
export type AppStateType = ReturnType<rootReducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

let Store = createStore(reducersBox);

export default Store