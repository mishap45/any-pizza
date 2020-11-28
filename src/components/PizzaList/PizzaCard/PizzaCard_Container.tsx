import React, {useState} from 'react'
import PizzaCard from './PizzaCard'

const PizzaCard_Container = () => {

    const [order, setOrder] = useState<boolean>(false);

    return (
        <PizzaCard order={order} setOrder={setOrder} />
    )
};

export default PizzaCard_Container