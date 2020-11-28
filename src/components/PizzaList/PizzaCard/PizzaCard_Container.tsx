import React, { useState } from 'react'
import PizzaCard from './PizzaCard'
import { pizza } from '../../../Types/types'
import { actionsCart } from '../../../store/reducers/CartReducer'
import { AppStateType } from '../../../store/Redux'
import { compose } from 'redux'
import { connect } from 'react-redux'

type statePropsType = {}

let setCart = actionsCart.setCart;

type dispatchPropsType = {
    setCart: (
        id: number,
        imgPizza: string,
        namePizza: string,
        size: string,
        price: number
    ) => void
}

type ownPropsType = pizza

type PizzaCard_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const PizzaCard_Container: React.FC<PizzaCard_ContainerTypes> = ({id, imgPizza, namePizza, descPizza, smallSize,
                                                                mediumSize, bigSize, price, setCart}) => {

    const [order, setOrder] = useState<boolean>(false);
    const [current, setCurrent] = useState<number>(30);

    const Ordered = (currentPrice: number) => {
        setOrder(true);
        setCart(id, imgPizza, namePizza, current.toString(), currentPrice)
    };

    return (
        <PizzaCard order={order} id={id} imgPizza={imgPizza} namePizza={namePizza}
                   descPizza={descPizza} smallSize={smallSize} mediumSize={mediumSize} bigSize={bigSize}
                   price={price} current={current} setCurrent={setCurrent} Ordered={Ordered}
        />
    )
};

const mapStateToProps = (state: AppStateType) => ({});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, { setCart })
)(PizzaCard_Container)