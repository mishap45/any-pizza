import React, {useState} from 'react'
import PizzaCard from './PizzaCard'
import { pizza } from '../../../Types/types'

const PizzaCard_Container: React.FC<pizza> = ({id, imgPizza, namePizza, descPizza, smallSize, mediumSize, bigSize, price}) => {

    const [order, setOrder] = useState<boolean>(false);
    const [current, setCurrent] = useState<number>(30);

    return (
        <PizzaCard order={order} setOrder={setOrder} id={id} imgPizza={imgPizza} namePizza={namePizza}
                   descPizza={descPizza} smallSize={smallSize} mediumSize={mediumSize} bigSize={bigSize}
                   price={price} current={current} setCurrent={setCurrent}
        />
    )
};

export default PizzaCard_Container