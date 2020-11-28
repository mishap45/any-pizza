import React, { useEffect, useState } from 'react'
import CartPage from './CartPage'
import { actionsCart, orderPizza } from '../../../store/reducers/CartReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { AppStateType } from '../../../store/Redux'
import { getCart } from '../../../store/selectors/CartSelector'

type statePropsType = {
    Pizza: Array<orderPizza>
}

const deleteAll = actionsCart.deleteAll;

type dispatchPropsType = {
    deleteAll: () => void
}

type ownPropsType = {}

type CartPage_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const CartPage_Container:React.FC<CartPage_ContainerTypes> = ({ Pizza, deleteAll }) => {

    const [empty, setEmpty] = useState<number>(0);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [orderAddress, setOrderAddress] = useState<string>('');

    useEffect(() => {
        Pizza.length === 0 ? setEmpty(0) : setEmpty(1)
    }, [Pizza]);

    return <CartPage empty={empty} showAlert={showAlert} deleteAll={deleteAll}
                     setShowAlert={setShowAlert}
                     orderAddress={orderAddress} setOrderAddress={setOrderAddress} />
};

const mapStateToProps = (state: AppStateType) => ({
    Pizza: getCart(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {deleteAll})
)(CartPage_Container)