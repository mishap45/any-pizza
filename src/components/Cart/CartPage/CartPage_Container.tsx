import React, { useState } from 'react'
import CartPage from './CartPage'

const CartPage_Container = () => {

    const [empty, setEmpty] = useState<number>(10);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [orderAddress, setOrderAddress] = useState<string>('');

    return (
        <CartPage empty={empty} showAlert={showAlert}
                  setShowAlert={setShowAlert}
                  orderAddress={orderAddress} setOrderAddress={setOrderAddress}
        />
    )
};

export default CartPage_Container