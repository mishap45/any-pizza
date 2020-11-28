import React, { useState } from 'react'
import CartTableElement from './CartTableElement'

type CartTableElement_ContainerTypes = {
    id: number
    imgPizza: string
    namePizza: string
    size: string
    price: number

    deleteOne: (idDelete: number) => void
}

const CartTableElement_Container:React.FC<CartTableElement_ContainerTypes> = ({ size, id, imgPizza,
                                                                                  namePizza, price, deleteOne }) => {

    const [count, setCount] = useState(1);

    return <CartTableElement price={price} namePizza={namePizza} imgPizza={imgPizza} deleteOne={deleteOne}
                             id={id} setCount={setCount} count={count} size={size} />
};

export default CartTableElement_Container