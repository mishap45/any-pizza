import React from 'react'
import CartTable from './CartTable'
import { AppStateType } from '../../../../store/Redux'
import { getCart } from '../../../../store/selectors/CartSelector'
import { actionsCart, orderPizza } from '../../../../store/reducers/CartReducer'
import { compose } from 'redux'
import { connect } from 'react-redux'

type statePropsType = {
    Pizza: Array<orderPizza>
}

const deleteOne = actionsCart.deleteOne;

type dispatchPropsType = {
    deleteOne: (idDelete: number) => void
}

type ownPropsType = {}

type CartTable_ContainerTypes = statePropsType & dispatchPropsType & ownPropsType

const CartTable_Container:React.FC<CartTable_ContainerTypes> = ({ Pizza, deleteOne }) =>
    <CartTable Pizza={Pizza} deleteOne={deleteOne} />;

const mapStateToProps = (state: AppStateType) => ({
    Pizza: getCart(state)
});

export default compose(
    connect<statePropsType, dispatchPropsType, ownPropsType, AppStateType>(mapStateToProps, {deleteOne})
)(CartTable_Container)