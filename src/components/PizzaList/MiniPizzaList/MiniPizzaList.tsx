import React from 'react'
import PizzaCard_Container from '../PizzaCard/PizzaCard_Container'
import style from '../pizzaList.module.css'

const MiniPizzaList = () => {
    return (
        <div className={style.pizzaList}>
            <PizzaCard_Container />
            <PizzaCard_Container />
            <PizzaCard_Container />
            <PizzaCard_Container />
        </div>
    )
};

export default MiniPizzaList