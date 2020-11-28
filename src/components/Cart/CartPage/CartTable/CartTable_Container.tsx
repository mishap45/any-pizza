import React, {useState} from 'react'
import CartTable from './CartTable'

const CartTable_Container = () => {

    const [count, setCount] = useState(1);

    return <CartTable count={count} setCount={setCount} />
};

export default CartTable_Container