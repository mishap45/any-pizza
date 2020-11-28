import React, { useEffect, useState } from 'react'
import { orderPizza } from '../../../store/reducers/CartReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppStateType } from '../../../store/Redux'
import { getCart } from '../../../store/selectors/CartSelector'
import CartButton from './CartButton'

type statePropsType = {
    Pizza: Array<orderPizza>
}

type dispatchPropsType = {}

type ownPropsType = {}

type CartButton_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const CartButton_Container:React.FC<CartButton_ContainerTypes> = ({ Pizza }) => {

    const [pizzaCartLength, setPizzaCartLength] = useState<number>(0);
    const [pizzaCartPrice, setPizzaCartPrice] = useState<number>(0);

    useEffect(() => {
        setPizzaCartLength(Pizza.length);
        for (let i:number = 0; i <= Pizza.length; i++) {
            if(Pizza.length === 0) {
                setPizzaCartPrice(0)
            } else {
                const totalPrice = Pizza.reduce((total, cost) => total + cost.price, 0);
                setPizzaCartPrice(totalPrice)
            }
        }
    }, [pizzaCartPrice, Pizza]);

    return <CartButton pizzaCartLength={pizzaCartLength} pizzaCartPrice={pizzaCartPrice} />
};

const mapStateToProps = (state: AppStateType) => ({
    Pizza: getCart(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {})
)(CartButton_Container)