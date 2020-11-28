import React, { useState } from 'react'
import CartTableElement from './CartTableElement'
import { actionsCart } from '../../../../../store/reducers/CartReducer'
import {AppStateType} from "../../../../../store/Redux";
import { getTotalPizzaOrder } from "../../../../../store/selectors/CartSelector";
import {compose} from "redux";
import {connect} from "react-redux";

type statePropsType = {
    totalPizzaOrder: number
}

const setTotal = actionsCart.setTotal;

type dispatchPropsType = {
    setTotal: (total: number) => void
}

type ownPropsType = {
    id: number
    imgPizza: string
    namePizza: string
    size: string
    price: number

    deleteOne: (idDelete: number) => void
}

type CartTableElement_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const CartTableElement_Container:React.FC<CartTableElement_ContainerTypes> = ({ size, id, imgPizza, setTotal, totalPizzaOrder,
                                                                                  namePizza, price, deleteOne }) => {

    const [count, setCount] = useState<number>(1);

    const addTotal = (totalBooster: number) => {
        setCount(count + 1);
        const action = totalPizzaOrder + totalBooster;
        setTotal(action)
    };

    const subtractTotal = (totalBooster: number) => {
        count === 1
            ? setCount(1)
            : setCount(count - 1);
        const action = totalPizzaOrder - totalBooster;
        setTotal(action)
    };

    const deleteOneRow = (totalBooster: number, idDelete: number) => {
        deleteOne(idDelete);
        const action = totalPizzaOrder - totalBooster;
        setTotal(action)
    };

    return <CartTableElement price={price} namePizza={namePizza} imgPizza={imgPizza} deleteOneRow={deleteOneRow}
                             id={id} count={count} size={size}
                             addTotal={addTotal} subtractTotal={subtractTotal} />
};

const mapStateToProps = (state: AppStateType) => ({
    totalPizzaOrder: getTotalPizzaOrder(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {setTotal})
)(CartTableElement_Container)